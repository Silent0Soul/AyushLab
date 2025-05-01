import React from 'react';

function JobList({ jobs, deleteJob, setEditingJob }) {
  return (
    <div className="job-list">
      <h2>Your Applications</h2>
      {jobs.length === 0 ? (
        <p>No applications found. Add one above!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Job Title</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Job Link</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.companyName}</td>
                <td>{job.jobTitle}</td>
                <td>{new Date(job.applicationDate).toLocaleDateString()}</td>
                <td>{job.status}</td>
                <td>
                  <a href={job.jobLink} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
                <td>{job.notes}</td>
                <td>
                  <button onClick={() => setEditingJob(job)}>Edit</button>
                  <button onClick={() => deleteJob(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default JobList;
