import { useEffect, useState } from "react";
import "./App.css";
import CardDetails from "./components/cardDetails/CardDetails";
import Cards from "./components/cards/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards users={users} />} />
        <Route path="/users/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
