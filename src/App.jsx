import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button msg="Primary" style="primary"/>
        <Button msg="Secondary" style="secondary"/>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert msg="😡 This is error alert box" alert="error"/>
        <Alert msg="⚠️ This is a warning alert box" alert="warning"/>
        <Alert msg="ℹ️ This is an info alert box" alert="info"/>
        <Alert msg="✅ This is an success alert box" alert="success"/>
      </div>
    </div>
  );
}

export default App;
