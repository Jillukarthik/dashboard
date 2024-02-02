import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
