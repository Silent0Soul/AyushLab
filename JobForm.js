import React, { useState, useEffect } from 'react';

function JobForm({ addJob, updateJob, editingJob, setEditingJob }) {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    applicationDate: '',
    status: 'Applied',
    jobLink: '',
    notes: ''
  });

  // Populate form when editing
  useEffect(() => {
    if (editingJob) setFormData(editingJob);
  }, [editingJob]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingJob) {
      updateJob(formData);
      setEditingJob(null);
    } else {
      addJob(formData);
    }
    // Reset form
    setFormData({
      companyName: '',
      jobTitle: '',
      applicationDate: '',
      status: 'Applied',
      jobLink: '',
      notes: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input
        type="text"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
        required
      />
      <input
        type="date"
        value={formData.applicationDate}
        onChange={(e) => setFormData({...formData, applicationDate: e.target.value})}
        required
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({...formData, status: e.target.value})}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
      </select>
      <input
        type="url"
        placeholder="Job Listing URL"
        value={formData.jobLink}
        onChange={(e) => setFormData({...formData, jobLink: e.target.value})}
      />
      <textarea
        placeholder="Notes"
        value={formData.notes}
        onChange={(e) => setFormData({...formData, notes: e.target.value})}
      />
      <button type="submit">{editingJob ? 'Update' : 'Add Application'}</button>
      {editingJob && (
        <button type="button" onClick={() => setEditingJob(null)}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default JobForm;
