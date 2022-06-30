import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-mono font-extrabold text-5xl">React Quiz App</h1>
        <p className="font-mono text-3xl font-medium">Welcome to the app Some-User</p>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/result" element={<Result />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
