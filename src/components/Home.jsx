import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "./Table";
import Pagination from "./Pagination";

export default function Home() {
  const [tableData, setTableData] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);

  const itemsPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tableData));
  }, [tableData]);

  const handleDelete = (index) => {
    const updated = [...tableData];
    updated.splice(index, 1);
    setTableData(updated);
  };

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);

  };

  // Filter
  const filteredTasks = tableData.filter((t) =>
    t.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort
  const sortedTasks = [...filteredTasks].sort((a, b) =>
    sortAsc
      ? a.task.localeCompare(b.task)
      : b.task.localeCompare(a.task)
  );

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentTasks = sortedTasks.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-pink-700">Task Management</h1>

      <Link
        to="/create"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create Task
      </Link>
      <br></br>
      {/* Search */}
      <input
        type="text"
        placeholder="Search by task..."
        className="border  p-2 mb-4 w-full"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // reset to first page when searching
        }}
      />

      {/* Table */}
      <Table
        tableData={currentTasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />

      {/* Pagination */}
      <Pagination
        totalItems={sortedTasks.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
