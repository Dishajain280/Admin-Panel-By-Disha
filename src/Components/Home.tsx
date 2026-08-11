import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsArrowUpShort,
  BsArrowDownShort,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2216 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  // Custom glassmorphic tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "rgba(10, 5, 0, 0.92)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 106, 0, 0.2)",
            padding: "12px 16px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 106, 0, 0.1)",
          }}
        >
          <p style={{ margin: 0, fontWeight: 700, fontSize: "0.85rem", color: "#fff8f0", marginBottom: "6px" }}>{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ margin: 0, fontSize: "0.85rem", color: entry.color || entry.fill, display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: entry.color || entry.fill }}></span>
              {entry.name}: <strong style={{ color: "#ffb347" }}>{entry.value}</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>NEXUS DASHBOARD</h3>
      </div>
      
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>300</h1>
            <span style={{ color: "#4ade80", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <BsArrowUpShort /> +12%
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card-icon" />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>12</h1>
            <span style={{ color: "#ffb347", fontSize: "0.85rem", fontWeight: 600 }}>
              Active
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card-icon" />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>33</h1>
            <span style={{ color: "#4ade80", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <BsArrowUpShort /> +8.4%
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card-icon" style={{ color: "#f87171", background: "rgba(248, 113, 113, 0.1)" }} />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>42</h1>
            <span style={{ color: "#f87171", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <BsArrowDownShort /> -2%
            </span>
          </div>
        </div>
      </div>

      <div className="charts">
        <div>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "20px", color: "#fff8f0", paddingLeft: "10px", letterSpacing: "0.05em" }}>
            REVENUE VS EXPENSES
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="barUvGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff6a00" stopOpacity={1} />
                  <stop offset="100%" stopColor="#cc4400" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="barPvGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffd700" stopOpacity={1} />
                  <stop offset="100%" stopColor="#ffb347" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 120, 0, 0.08)" />
              <XAxis dataKey="name" stroke="#a07850" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <YAxis stroke="#a07850" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "0.8rem", paddingTop: "10px", color: "#fff8f0" }} />
              <Bar
                name="Revenue"
                dataKey="pv"
                fill="url(#barPvGrad)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                name="Expenses"
                dataKey="uv"
                fill="url(#barUvGrad)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "20px", color: "#fff8f0", paddingLeft: "10px", letterSpacing: "0.05em" }}>
            GROWTH OVERVIEW
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 120, 0, 0.08)" />
              <XAxis dataKey="name" stroke="#a07850" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <YAxis stroke="#a07850" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "0.8rem", paddingTop: "10px", color: "#fff8f0" }} />
              <Line
                name="Sales"
                type="monotone"
                dataKey="pv"
                stroke="#ffb347"
                strokeWidth={3}
                dot={{ stroke: "#ffb347", strokeWidth: 2, r: 4, fill: "#0a0700" }}
                activeDot={{ r: 6, strokeWidth: 0, fill: "#ffd700" }}
              />
              <Line
                name="Visitors"
                type="monotone"
                dataKey="uv"
                stroke="#ff6a00"
                strokeWidth={3}
                dot={{ stroke: "#ff6a00", strokeWidth: 2, r: 4, fill: "#0a0700" }}
                activeDot={{ r: 6, strokeWidth: 0, fill: "#ff8c42" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
