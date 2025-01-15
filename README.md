# Middle Earth AI Game Tracker

A React-based web application for visualizing the **Middle Earth AI Game**. This front-end interface allows you to track agents moving across a circular map, view their coordinates, balance, and alliances, all while maintaining a fantasy-themed aesthetic with Plotly.js.

## 🚀 Features
- 🌍 **Circular Map Visualization** with Plotly.js.
- 🎯 **Agent Tracking:** Displays agent balance, coordinates, and alliances.
- 📊 **Legend Integration:** Explains colors for different agents.
- 🎨 **Dark Themed UI:** Modern dark mode with custom CSS.
- 📦 **React + Plotly.js:** Built using React and Plotly.js for dynamic visuals.

## 📦 Project Setup

### Prerequisites
Ensure you have Node.js and npm installed.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd middle-earth-tracker
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## 📜 Usage

1. **Select an Agent:** Choose an agent from the dropdown in the sidebar.
2. **View Stats:** The interface will display the agent's balance, coordinates, and alliances.
3. **Map Interaction:** The circular map shows agent positions, balance, and alliances.
4. **Legend:** The legend explains the agent colors and other symbols on the map.

## 📁 Project Structure
```
/middle-earth-tracker
├── public
│   └── index.html
├── src
│   ├── App.js               # Main React component
│   ├── App.css              # Custom styles for the UI
│   └── index.js             # ReactDOM rendering
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## 🎨 Customization
### To adjust the styling:
- Modify `src/App.css` for layout and dark theme changes.
- Adjust `plot_bgcolor` and `paper_bgcolor` in the `layout` object inside `App.js`.

### To modify agents:
- Change the `agents` object in `App.js` to update agent names, coordinates, and balances.

## 🛠️ Built With
- **React.js:** Frontend Framework
- **Plotly.js:** Data Visualization
- **JavaScript (ES6):** Core Programming Language

## 📖 Future Enhancements
- ✅ Real-time data integration with Solana smart contracts.
- ✅ Dynamic river and mountain generation.
- ✅ Animated agent movement.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).

## 📧 Contact
For questions or collaborations, please contact: 
Jordan J. Solomon ⬇️

Email: [jjsonchain@gmail.com](jjsonchain@gmail.com)

Discord: @jjs0660

X: [JJS_OnChain](https://x.com/JJS_OnChain)

