import React from "react";

export default function Table({ tableData, handleEdit, handleDelete, sortAsc, setSortAsc }) {
  return (
    <table className="border w-full mt-8">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 flex items-center">
            <span>Task</span>
            <button
              className="ml-2 text-xs"
              onClick={() => setSortAsc(!sortAsc)}
            >
              {sortAsc ? "▲" : "▼"}
            </button>
          </th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, idx) => (
          <tr key={idx}>
            <td className="border px-4 py-2">{data.task}</td>
            <td className="border px-4 py-2">{data.description}</td>
            <td className="border px-4 py-2">{data.status}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                onClick={() => handleEdit(idx)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={() => handleDelete(idx)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
