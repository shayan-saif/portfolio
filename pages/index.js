import data from "./api/data.json";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import HomeIcon from "@mui/icons-material/HomeRounded";
import PersonIcon from "@mui/icons-material/PersonRounded";
import VerifiedIcon from "@mui/icons-material/VerifiedRounded";


export default function Home() {
  const links = [
    {
      label: "Home",
      href: "#home",
      icon: <HomeIcon />
    },
    {
      label: "Experience",
      href: "#experience",
      icon: <PersonIcon />
    },
    {
      label: "Certifications",
      href: "#certifications",
      icon: <VerifiedIcon />
    },
  ]

  const [window, setWindow] = useState(null);
  useEffect(() => {
    const window = globalThis?.window;

    setWindow(window.innerWidth)
    window.addEventListener('resize', ({ target }) => setWindow(target.innerWidth));
    return () => {
      window.removeEventListener('resize', ({ target }) => setWindow(target.innerWidth));
    }
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Shayan Saif</title>
        </Head>
        <Navbar links={links} windowSize={window} />
        <Landing anchor="home" data={data.landing} windowSize={window} />
        <Experience anchor="experience" data={data.experience} />
        <Certifications anchor="certifications" data={data.certifications} windowSize={window} />
      </div>
    </ThemeProvider>
  )
}
