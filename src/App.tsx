import "./App.css";
import BoardComponent from "./components/Board";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-500 to-blue-800 flex items-center justify-center">
      <div className="text-white">
        <BoardComponent />
      </div>
    </div>
  );
}

export default App;
