// App.js (React-based Middle Earth Tracker using Plotly.js)
import React, { useState } from "react";
import Plot from "react-plotly.js";
import "./App.css"; 

// Data to place the initial location of the agents
const agents = {
  X: { coordinates: [5, 5], balance: 100, allied_with: "Y" },
  Y: { coordinates: [7, -3], balance: 90, allied_with: "X" },
  Z: { coordinates: [-8, 2], balance: 110, allied_with: null },
  W: { coordinates: [-6, -5], balance: 80, allied_with: null },
};

// Color of the agents on the map
const agentColors = {
  X: "red",
  Y: "green",
  Z: "blue",
  W: "orange",
};

// Coordinates of the mountain ridges on the map TODO finish
const mountainRanges = [
  // little cluster bottom left
  [[-4.8, -1.5], [-4.6, -1.6], [-4.5, -1.8], [-4.8, -2], [-4.8, -2], [-5.1, -1.9], [-5, -1.7]],
  // big range bottom map
  [[0, -6], [0.2, -5.8], [0.4, -6], [0.6, -6.2], [0.8, -6], [1, -5.8], [1.2, -5.6], 
  [1.4, -5.4], [1.6, -5.2], [1.8, -5], [2, -4.8], [2.1, -4.6], [2.3, -4.4], [2.5, -4.2], 
  [2.7, -4.4], [2.8, -4.2], [3, -4], [3.2, -4.3], [3.4, -4.2], [3.6, -4.1], [3.5, -4], 
  [3.7, -4.3], [3.9, -4.5], [4.1, -4.4], [4.2, -4.6]],
  [[2.3, -4.2], [2.1, -4], [1.9, -4], [1.7, -4.2], [1.5, -4], [1.4, -3.9], [1.2, -3.8], 
  [1.1, -3.7], [0.9, -3.6], [0.8, -3.6], [0.7, -3.5], [0.5, -3.3], [0.5, -3.2], [0.3, -3.2], 
  [0.2, -3], [0.1, -3], [0, -2.8], [0, -2.6], [0.2, -2.7], [0.1, -2.5], [0, -2.5], 
  [-0.2, -2.4], [-0.3, -2.3], [-0.4, -2.1], [-0.6, -2.1], [-0.8, -2], [-0.9, -2.1], 
  [-1, -2], [-0.9, -2.2], [-0.9, -2], [-1,-1.9], [-1, -1.6], [-0.9, -1.4], [-1, -1.2], [-0.9, -1], [-1, -0.8], [-1.2, -0.6], [-1.4, -0.4], [-1.6, -0.3], [-1.8, -0.5]],
  [[9.2,3], [9, 2.8], [9, 2.6], [9.2, 2.6], [9, 2.6], [8.8, 2.4], [9, 2.4], [9.1, 2.6], [8.9, 2.4]]
];

// Coordinates for rivers. TODO finish
const riverPaths = [
  [[1, 6], [2, 5], [3, 4], [4, 3]],
  [[6, 9], [7, 8], [8, 7]],
];

// All of the data for creating the visualization of the map
const MiddleEarthMap = ({ agents, selectedAgent }) => {
  const [hoverInfo, setHoverInfo] = useState(null); // Setting hovering info

  // Creating the circle containing the map
  const circleRadius = 10;
  const circlePoints = Array.from({ length: 360 }, (_, i) => ({
    x: circleRadius * Math.cos((i * Math.PI) / 180),
    y: circleRadius * Math.sin((i * Math.PI) / 180),
  }));

  const circleTrace = {
    x: circlePoints.map((point) => point.x),
    y: circlePoints.map((point) => point.y),
    mode: "lines",
    line: { color: "white" },
  };
  
  // Putting the players on the map
   const agentTraces = Object.entries(agents).map(([name, data]) => ({
    x: [data.coordinates[0]],
    y: [data.coordinates[1]],
    mode: "markers",
    text: `${name} 💰${data.balance}`,
    marker: {
      size: 25,
      color: agentColors[name],
      opacity: 0.9,
      line: { color: "white", width: 2 },
    },
    hoverinfo: "text",
  }));

  // Putting the mountain ranges on the map using the coordinates we set before
  const mountainTraces = mountainRanges.map((range) => ({
    x: range.map((point) => point[0]),
    y: range.map((point) => point[1]),
    mode: "lines+markers",
    marker: { size: 10, symbol: "triangle-up", color: "brown" },
    line: { color: "brown" },
  }));

  // Putting the river paths on the map using the coordinates we set before
  const riverTraces = riverPaths.map((river) => ({
    x: river.map((point) => point[0]),
    y: river.map((point) => point[1]),
    mode: "lines",
    line: { color: "blue", width: 3 },
  }));

    // Plot layout styling
    const layout = {
      title: {
        text: "🌍 Middle Earth Map",
        font: { size: 24, color: "white" },
        x: 0.5, 
        xanchor: "center",
      },
      plot_bgcolor: "#111",
      paper_bgcolor: "#111",
      xaxis: { visible: false, scaleanchor: "y", range: [-10, 10] },
      yaxis: { visible: false, scaleanchor: "x", range: [-10, 10] },
      margin: { t: 100, b: 100, l: 100, r: 50 },
      
    };
  
    return (
      <div className="map-container">
        <Plot
          data={[circleTrace, ...agentTraces]}
          layout={layout}
          style={{ width: "100%", height: "600px" }}
          onHover={(e) => setHoverInfo(e.points[0].text)}
        />
        {hoverInfo && <div className="hover-info">{hoverInfo}</div>}
      </div>
    )
};

const App = () => {
  const [selectedAgent, setSelectedAgent] = useState("X");

  return (
    <div className="App">
      <h1>🏰 Middle Earth AI Game Tracker</h1>
      <div className="sidebar">
        <label>Select an Agent: </label>
        <select
          value={selectedAgent}
          onChange={(e) => setSelectedAgent(e.target.value)}
        >
          {Object.keys(agents).map((agent) => (
            <option key={agent} value={agent}>
              {agent}
            </option>
          ))}
        </select>
      </div>

      <div className="agent-info">
        <h2>Agent Information</h2>
        <p>💰 Balance: ${agents[selectedAgent].balance}</p>
        <p>📍 Coordinates: ({agents[selectedAgent].coordinates.join(", ")})</p>
        <p>🤝 Allied With: {agents[selectedAgent].allied_with || "None"}</p>

      <MiddleEarthMap agents={agents} selectedAgent={selectedAgent} />
    </div>
      </div>
  );
};

export default App;
