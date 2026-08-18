import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function RevenueTrends() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/revenue-trends")
      .then(res => res.json())
      .then(trends => {
        const arr = Object.entries(trends).map(([month, revenue]) => ({ month, revenue }));
        setData(arr);
      })
      .catch(err => console.error("Error fetching revenue trends:", err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-gradient bg-success text-white fs-4 fw-bold">
        💹 Revenue Trends
      </div>
      <div className="card-body d-flex justify-content-center">
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
}

export default RevenueTrends;

