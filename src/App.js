import React from "react";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <Footer />
        </div>
    )
}

export default App;