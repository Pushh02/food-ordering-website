import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { ToastContainer} from "react-toastify";
// import moment from "moment";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
