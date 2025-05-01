import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import JobForm from './JobForm';
import JobList from './JobList';

function App() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  // Load jobs from localStorage on component mount
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(savedJobs);
  }, []);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    const newJob = { ...job, id: uuidv4() };
    setJobs([...jobs, newJob]);
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map(job => job.id === updatedJob.id ? updatedJob : job));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
      <JobForm 
        addJob={addJob} 
        updateJob={updateJob} 
        editingJob={editingJob}
        setEditingJob={setEditingJob}
      />
      <JobList 
        jobs={jobs} 
        deleteJob={deleteJob} 
        setEditingJob={setEditingJob}
      />
    </div>
  );
}

export default App;
