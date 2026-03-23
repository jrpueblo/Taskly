import './App.css';

function App() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="bg-mint-500">Hello World</h1>

      {/* Test Background Colors */}
      <div className="p-4 bg-primary text-text ">primary</div>
      <div className="p-4 bg-secondary text-text">secondary</div>
      <div className="p-4 bg-accent text-text">accent</div>
      <div className="p-4 bg-highlight">highlight</div>

      {/* Test Text Colors */}
      <p className="text-primary">text-primary</p>
      <p className="text-secondary">text-secondary</p>
      <p className="text-accent">text-accent</p>
      <p className="text-highlight">text-highlight</p>

      {/* Optional: boxes with text color on secondary background */}
      <div className="p-4 bg-secondary text-primary">primary text on secondary</div>
      <div className="p-4 bg-secondary text-accent">accent text on secondary</div>
      <div className="p-4 bg-secondary text-highlight">highlight text on secondary</div>
    </div>
  )
}

export default App