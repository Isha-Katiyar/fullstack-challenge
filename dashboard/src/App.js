import "./App.css";
import DetailForm from "./Pages/DetailForm";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./Pages/Dashboard";
import ListDashboard from "./Pages/ListDashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DetailForm />} />
          <Route path="/dashboard" element={<ListDashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <div className='Container'>
        <DetailForm ></DetailForm>
      </div> */}
    </div>
  );
}

// export default App;
