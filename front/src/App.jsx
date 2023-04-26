import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

axios.create({ baseURL: "http://localhost:8000/" });

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
