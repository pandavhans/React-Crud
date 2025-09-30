import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPage from "../src/page/add";
import ViewPage from "../src/page/view";
import EditPage from "../src/page/edit";


export default function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Add</Link> | <Link to="/view">View</Link>
        </nav>

        <Routes>
          <Route path="/" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </div>
    </Router>
  );
}
