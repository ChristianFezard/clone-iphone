"use client"
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Navbar from "./Components/Navbar";
import Model from "./Components/Model"


const Home = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

export default Home
