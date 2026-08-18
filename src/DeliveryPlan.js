import React, { useEffect, useState } from "react";

function DeliveryPlan() {
  const [groups, setGroups] = useState({});

  useEffect(() => {
    fetch("/api/delivery-plan")
      .then(res => res.json())
      .then(data => setGroups(data))
      .catch(err => console.error("Error fetching delivery plan:", err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-gradient bg-info text-white fs-4 fw-bold">
        🚚 Delivery Plan
      </div>
      <div className="card-body">
        {Object.entries(groups).map(([subcity, customers]) => (
          <div key={subcity} className="mb-3">
            <h5 className="text-primary fw-bold">{subcity}</h5>
            <ul className="list-group">
              {customers.map(c => (
                <li
                  key={c.customer_id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{c.name}</span>
                  <span className={`badge bg-${c.status === "Active" ? "success" : c.status === "At-risk" ? "warning" : "danger"} me-2`}>
                    {c.status}
                  </span>
                  <span className={`badge bg-${c.risk === "Low Risk" ? "success" : c.risk === "Medium Risk" ? "warning" : "danger"}`}>
                    {c.risk}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryPlan;



