// File: src/hooks/useReferralJob.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useNecleous = (s3Paths) => {
  const [jobId, setJobId] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [polling, setPolling] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    const links = s3Paths
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

    if (links.length === 0) {
      setError('Please enter at least one S3 path.');
      return;
    }

    setLoading(true);
    setError(null);
    setJobId(null);
    setStatus(null);

    try {
      const response = await axios.post(
        process.env.REACT_APP_SUBMIT_NUCLEOUS_API_URL,
        { links },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setJobId(response.data);
        console.log(response.data)
        setPolling(true);
      } else {
        setError(`Submission failed: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  if (!jobId || !polling) return;

  const MAX_ATTEMPTS = 10;
  const WAIT_SECONDS = 3000;

  const pollStatus = async (attempt = 1) => {
    if (attempt > MAX_ATTEMPTS) {
      setError('Job still in progress. Please check again later.');
      setPolling(false);
      return;
    }

    try {
      const res = await axios.post(
        process.env.REACT_APP_STATUS_NUCLEOUS_API_URL,
        { job_id: jobId },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const resultJson = res.data;
      let status = resultJson?.status || "";

      if (typeof status === 'object') {
        status = status.code || "";
      }

      console.log(`🔄 Attempt ${attempt}: Status → ${status}`);
      setStatus(`Attempt ${attempt}: Status → ${status}`);

      if (typeof status === 'string' && status.toLowerCase() !== 'in progress') {
        setStatus(resultJson); // or: setFinalResult(resultJson)
        setPolling(false);
        return;
      }

    } catch (err) {
      console.error("❌ Polling error:", err);
      setError(`Polling error: ${err.message}`);
      setPolling(false);
      return;
    }

    setTimeout(() => pollStatus(attempt + 1), WAIT_SECONDS);
  };

  pollStatus();
}, [jobId, polling]);


  return {
    jobId,
    status,
    loading,
    polling,
    error,
    handleSubmit
  };
};

export default useNecleous;
