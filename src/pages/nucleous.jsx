import React, { useState } from 'react';
import useNecleous from '../hooks/useNecleous';
import '../styles/healthcare.css'; // Import the CSS file

const HomeReferralPage = () => {
  const [s3Paths, setS3Paths] = useState(
    `https://referralsummary.s3.us-east-1.amazonaws.com/final-testing/AYUSH-JOSHI/10fe9c17-6393-411d-b685-db7af6a7620e_BILL3.jpg\nhttps://referralsummary.s3.us-east-1.amazonaws.com/final-testing/AYUSH-JOSHI/3dbeff96-e8dd-44ae-8396-98e5a18010a6_BILL+NEW.jpg`
  );
  const {
    jobId,
    status,
    loading,
    polling,
    error,
    handleSubmit
  } = useNecleous(s3Paths);

  const [showResult, setShowResult] = useState(true);

  return (
    <div className="referral-container">
      <h1 className="heading">📄 Nucleon Health</h1>

      <label htmlFor="s3-input" className="label">
        🧾 Paste S3 PDF links (one per line):
      </label>
      <textarea
        id="s3-input"
        rows={6}
        value={s3Paths}
        onChange={(e) => setS3Paths(e.target.value)}
        className="textarea"
        placeholder="Enter one S3 path per line"
      />

      <button onClick={handleSubmit} disabled={loading} className="button">
        {loading ? '⏳ Submitting...' : '📤 Submit'}
      </button>

      {jobId && (
        <p className="success">✅ Job submitted!</p>
      )}
      {polling && <p className="status">🔄 Checking job status...</p>}
      {error && <p className="error">❌ {error}</p>}

      {status && (
        <div className="result-section">
          <div className="result-header">
            <h3 className="result-title">🎉 Job Completed</h3>
            <button
              className="toggle-button"
              onClick={() => setShowResult(!showResult)}
            >
              {showResult ? 'Hide' : 'Show'} Results
            </button>
          </div>

          {showResult && (
            <pre className="result-box">
              {JSON.stringify(status, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeReferralPage;
