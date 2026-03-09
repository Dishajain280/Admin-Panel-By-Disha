import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
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
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2216,
    },

    {
      name: "Page C",
      uv: 1780,
      pv: 5308,
      amt: 2130,
    },
    {
      name: "Page D",
      uv: 2890,
      pv: 2200,
      amt: 2181,
    },
    {
      name: "Page E",
      uv: 2990,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page F",
      uv: 2590,
      pv: 4876,
      amt: 2100,
    },
  ];

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
          <h1>300</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card-icon" />
          </div>
          <h1>12</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card-icon" />
          </div>
          <h1>33</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card-icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3  3" stroke="grey" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#f8d3a3"
              opacity={0.9}
              activeBar={{ stroke: "black" }}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="#bb1313"
              opacity={0.98}
              activeBar={{ stroke: "black" }}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="grey" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="red"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div></div>
    </main>
  );
}

export default Home;
