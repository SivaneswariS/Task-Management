
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ task: "", description: "", status:"Pending"});

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    const tasks = stored ? JSON.parse(stored) : [];
    setFormData(tasks[id]);
  }, [id]);

  const handleFormDataChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("tasks");
    const tasks = stored ? JSON.parse(stored) : [];
    tasks[id] = formData;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/");
  };

  return (
    <Form
      formData={formData}
      handleFormDataChange={handleFormDataChange}
      handleSubmit={handleSubmit}
      editIndex={id}
    />
  );
}
