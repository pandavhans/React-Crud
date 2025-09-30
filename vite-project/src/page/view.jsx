import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ViewPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("list");
    if (saved) setList(JSON.parse(saved));
  }, []);

  const deleteItem = (i) => {
    const newList = list.filter((_, index) => index !== i);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  return (
    <div>
      <h2>View Page</h2>
      <ul>
        {list.map((name, i) => (
          <li key={i}>
            {name}
            <Link to={`/edit/${i}`} style={{ marginLeft: 10 }}>
              Edit
            </Link>
            <button onClick={() => deleteItem(i)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
