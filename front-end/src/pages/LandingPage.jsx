import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header blackHeader="true" />
      <div className="flex-grow flex flex-col justify-center items-center my-3 gap-5">
        
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
