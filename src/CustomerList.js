import React, { useEffect, useState } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/churn")
      .then(res => res.json())
      .then(data => setCustomers(Object.values(data).filter(c => c !== null)))
      .catch(err => console.error("Error fetching churn data:", err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-gradient bg-primary text-white fs-4 fw-bold">
        📋 Customer List
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Churn Status</th>
              <th>Credit Risk</th>
              <th>Last Order</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.customer_id}>
                <td>{c.name}</td>
                <td>
                  <span className={`badge bg-${c.status === "Active" ? "success" : c.status === "At-risk" ? "warning" : "danger"}`}>
                    {c.status}
                  </span>
                </td>
                <td>
                  <span className={`badge bg-${c.risk === "Low Risk" ? "success" : c.risk === "Medium Risk" ? "warning" : "danger"}`}>
                    {c.risk}
                  </span>
                </td>
                <td>{c.last_order}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
