import React from "react";
import SmoothScroll from "@/components/azwad-media/SmoothScroll";
import LogoIntro from "@/components/azwad-media/LogoIntro";
import Nav from "@/components/azwad-media/Nav";
import Hero, { ScrollProgress } from "@/components/azwad-media/Hero";
import FeaturedWork from "@/components/azwad-media/FeaturedWork";
import Services from "@/components/azwad-media/Services";
import Packages from "@/components/azwad-media/Packages";
import Testimonials from "@/components/azwad-media/Testimonials";
import EditingOnly from "@/components/azwad-media/EditingOnly";
import AddOns from "@/components/azwad-media/AddOns";
import WhyAzwad from "@/components/azwad-media/WhyAzwad";
import Process from "@/components/azwad-media/Process";
import Portfolio from "@/components/azwad-media/Portfolio";
import Gear from "@/components/azwad-media/Gear";
import AboutMe from "@/components/azwad-media/AboutMe";
import FAQ from "@/components/azwad-media/FAQ";
import BookingCTA from "@/components/azwad-media/BookingCTA";
import Footer from "@/components/azwad-media/Footer";
import Reveal from "@/components/azwad-media/Reveal";

export default function Home() {
  return (
    <SmoothScroll>
    <div className="bg-[#0A0A0B] min-h-screen">
      <LogoIntro />
      <ScrollProgress />
      <Nav />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><FeaturedWork /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Packages /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><EditingOnly /></Reveal>
        <Reveal><AddOns /></Reveal>
        <Reveal><WhyAzwad /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Portfolio /></Reveal>
        <Reveal><Gear /></Reveal>
        <Reveal><AboutMe /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><BookingCTA /></Reveal>
      </main>
      <Reveal><Footer /></Reveal>
    </div>
    </SmoothScroll>
  );
}
