import { useState } from "react";
import "./App.css";

function App() {
  const [showEnvInfo, setShowEnvInfo] = useState(false);

  // Environment variables are accessed through import.meta.env
  const environmentInfo = {
    apiUrl: import.meta.env.VITE_API_URL,
    appTitle: import.meta.env.VITE_APP_TITLE,
    featureFlag: import.meta.env.VITE_FEATURE_FLAG,
    mode: import.meta.env.MODE, // Built-in env variable
    dev: import.meta.env.DEV, // Built-in env variable
    prod: import.meta.env.PROD, // Built-in env variable
  };

  return (
    <div className="container">
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>

      <div className="card">
        <button onClick={() => setShowEnvInfo(!showEnvInfo)}>
          {showEnvInfo ? "Hide" : "Show"} Environment Variables
        </button>

        {showEnvInfo && (
          <div className="env-info">
            <h2>Environment Variables:</h2>
            <pre>{JSON.stringify(environmentInfo, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="info-box">
        <p>API URL: {import.meta.env.VITE_API_URL}</p>
        <p>
          Feature Flag:{" "}
          {import.meta.env.VITE_FEATURE_FLAG ? "Enabled" : "Disabled"}
        </p>
        <p>Current Mode: {import.meta.env.MODE}</p>
      </div>

      <div className="instructions">
        <h3>How to use environment variables in Vite:</h3>
        <ol>
          <li>
            Create a <code>.env</code> file in your project root
          </li>
          <li>
            Prefix your variables with <code>VITE_</code>
          </li>
          <li>
            Access them using <code>import.meta.env.VITE_YOUR_VARIABLE</code>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
