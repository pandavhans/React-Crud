import React, { useState, useEffect } from "react";

export default function AddPage() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("list");
    if (saved) setList(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItem = () => {
    if (!text) return;  
    setList([...list, text]);
    setText("");
  };

  return (
    <div>
      <h2>Add Page</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
