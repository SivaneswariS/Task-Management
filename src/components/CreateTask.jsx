
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function CreateTask() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ task: "", description: "" ,status:"Pending"});

  const handleFormDataChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("tasks");
    const tasks = stored ? JSON.parse(stored) : [];
    tasks.push(formData);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/");
  };

  return (
    <Form
      formData={formData}
      handleFormDataChange={handleFormDataChange}
      handleSubmit={handleSubmit}
      editIndex={null}
    />
  );
}
