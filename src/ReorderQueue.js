import React, { useEffect, useState } from "react";

function ReorderQueue() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    fetch("/api/reorder-queue")
      .then(res => res.json())
      .then(data => setQueue(data))
      .catch(err => console.error("Error fetching reorder queue:", err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-gradient bg-warning text-dark fs-4 fw-bold">
        📦 Reorder Queue
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Last Order</th>
              <th>Credit Risk</th>
              <th>Reorder Status</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((c) => (
              <tr key={c.customer_id}>
                <td>{c.name}</td>
                <td>{c.last_order}</td>
                <td>
                  <span className={`badge bg-${c.risk === "Low Risk" ? "success" : c.risk === "Medium Risk" ? "warning" : "danger"}`}>
                    {c.risk}
                  </span>
                </td>
                <td>
                  <span className={`badge bg-${c.reorderStatus === "Due now" ? "danger" : "warning"}`}>
                    {c.reorderStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReorderQueue;



