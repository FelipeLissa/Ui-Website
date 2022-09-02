import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Head from "next/head";
import { HomeContainer } from "../styles/HomeStyles";
import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeHero";
import { Category } from "../components/Category";
import { TopSelling } from "../components/TopSelling";
import { NextTrip } from "../components/NextTrip";
import { Testimonials } from "../components/Testimonials";
import { CompaniesLogos } from "../components/CompaniesLogos";
import { Subscribe } from "../components/Subscribe";
import { Footer } from "../components/Footer";
import { ProjectDescription } from "../components/ProjectDescription";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Website Portfólio -Felipe Lissa</title>
      </Head>
      <div>
       <ProjectDescription></ProjectDescription>
        </div>
      <main>
        <div>
        <img src="/Decore.png" />
          <Header></Header>
          <HomeHero></HomeHero>
          <Category></Category>
          <TopSelling></TopSelling>
          <NextTrip></NextTrip>
          <Testimonials></Testimonials>
          <CompaniesLogos></CompaniesLogos>
          <Subscribe></Subscribe>
          <Footer></Footer>
        </div>
      </main>
    </HomeContainer>
  );
}
