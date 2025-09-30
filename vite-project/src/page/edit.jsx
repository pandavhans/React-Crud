import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPage() {
  const { id } = useParams(); // get index from URL
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("list");
    if (saved) {
      const arr = JSON.parse(saved);
      setList(arr);
      setText(arr[id]);
    }
  }, [id]);

  const updateItem = () => {
    const copy = [...list];
    copy[id] = text;
    setList(copy);
    localStorage.setItem("list", JSON.stringify(copy));
    navigate("/view"); // go back to view page
  };

  return (
    <div>
      <h2>Edit Page</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={updateItem}>Update</button>
    </div>
  );
}
