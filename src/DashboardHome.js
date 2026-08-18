import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";



function DashboardHome() {
  const [summary, setSummary] = useState({
    total: 0,
    active: 0,
    atRisk: 0,
    dormant: 0,
    revenue: 0,
  });

  useEffect(() => {
    fetch("/api/churn")
      .then(res => res.json())
      .then(data => {
        const arr = Object.values(data).filter(c => c !== null);
        const active = arr.filter(c => c.status === "Active").length;
        const atRisk = arr.filter(c => c.status === "At-risk").length;
        const dormant = arr.filter(c => c.status === "Dormant").length;
        const revenue = arr.reduce((sum, c) => sum + (c.credit_limit || 0), 0);

        setSummary({
          total: arr.length,
          active,
          atRisk,
          dormant,
          revenue,
        });
      })
      .catch(err => console.error("Error fetching summary:", err));
  }, []);

  const pieData = [
    { name: "Active", value: summary.active },
    { name: "At-risk", value: summary.atRisk },
    { name: "Dormant", value: summary.dormant },
  ];
  const COLORS = ["#28a745", "#ffc107", "#dc3545"];

  return (
    <div className="card mb-4">
      <div className="card-header bg-gradient bg-dark text-white fs-4 fw-bold">
        🏠 Dashboard Home
      </div>
      <div className="card-body">
        {/* KPI Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-header bg-dark text-white">Total Customers</div>
              <div className="card-body"><h3>{summary.total}</h3></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-header bg-success text-white">Active</div>
              <div className="card-body"><h3>{summary.active}</h3></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-header bg-warning text-dark">At-risk</div>
              <div className="card-body"><h3>{summary.atRisk}</h3></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-header bg-danger text-white">Dormant</div>
              <div className="card-body"><h3>{summary.dormant}</h3></div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card text-center">
              <div className="card-header bg-info text-white">Total Revenue</div>
              <div className="card-body"><h3>${summary.revenue.toLocaleString()}</h3></div>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="d-flex justify-content-center">
          <PieChart width={400} height={300}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;

