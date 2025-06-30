import React from "react";

export default function Form({ formData, handleFormDataChange, handleSubmit, editIndex }) {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Form</h1>
      <form className="border rounded-lg p-4" onSubmit={handleSubmit}>
        <input
          className="border w-full p-2 rounded-lg mb-2"
          type="text"
          placeholder="Task"
          onChange={(e) => handleFormDataChange("task", e.target.value)}
          required
          value={formData.task}
        />
        <textarea
          className="border w-full p-2 rounded-lg mb-2"
          placeholder="Description"
          rows={4}
          onChange={(e) => handleFormDataChange("description", e.target.value)}
          required
          value={formData.description}
        />
        <select
          className="border w-full p-2 rounded-lg mb-4"
          value={formData.status}
          onChange={(e) => handleFormDataChange("status", e.target.value)}
          required
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="bg-blue-600 text-white p-2 rounded-lg" type="submit">
          {editIndex === null ? "Add" : "Save"}
        </button>
      </form>
    </>
  );
}

