import React from "react";
import { useSelector } from "react-redux";
import Result from '../components/Result';
import NavBar from '../components/Navbar';
import Footer from "../components/Footer";

function Insights() {
  const results = useSelector((state) => state.scan.data);
  console.log("result from insight",results);
  
  return (
    <>
    <NavBar/>
      <div className="min-h-screen bg-white">
        {/* Results */}
        {results && <Result results={results} />}
      </div>
      <Footer/>
    </>
  );
}

export default Insights;
