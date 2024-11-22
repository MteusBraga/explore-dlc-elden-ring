"use client";

import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { ExploreSec } from "./components/ExploreSec/ExploreSec";
import { NavBar } from "./components/Navbar/Navbar";
import { TrailerSec } from "./components/TrailerSec/TrailerSec";
import { motion, useScroll } from "framer-motion";
import { SkillsSec } from "./components/SkillsSec/SkillsSec";
import { ConceptArtsSec } from "./components/ConceptArtsSec/ConceptArtsSec";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <TrailerSec></TrailerSec>
      <ExploreSec></ExploreSec>
      <SkillsSec></SkillsSec>
      <ConceptArtsSec></ConceptArtsSec>
      <Footer></Footer>
    </>
  );
}
