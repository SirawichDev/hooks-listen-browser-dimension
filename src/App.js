import React, { useEffect, useState } from "react";
import "./App.css";
import { useBrowserSize } from "./utils/useBrowserSize";

function App() {
  const [width, height] = useBrowserSize();
  const [dimensionColor, setDimensionColor] = useState(undefined);
  useEffect(() => {
    switch (true) {
      case width > 500 && width < 600:
        setDimensionColor('green')
        break;
      case width > 601 && width < 700:
        setDimensionColor('yellow')
        break;
      case width > 701 && width <800:
        setDimensionColor('red')
        break;
      case width > 801 && width <900:
        setDimensionColor('blue')
        break;  
      case width > 900:
        setDimensionColor('pink')
        break; 
      default:
        setDimensionColor('gray')
        break;
    }
  }, [width]);
  return (
    <div className="App">
      <header className="App-header">
        {width} x {height}
        <h1>Will Change When Dimension Change :3</h1>
        <svg id="progress" viewBox="0 0 100 100" width="100" height="100">
          <g
            fill="none"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(5 5) scale(0.9 0.9)"
          >
            <path
              stroke="hsl(0, 20%, 29%)"
              opacity="0.5"
              d="M 0 50 100 50"
            ></path>
            <path
              stroke={`${dimensionColor}`}
              d={`M 0 50 ${width / 15} 50`}
            ></path>
          </g>
        </svg>

      </header>
    </div>
  );
}

export default App;
