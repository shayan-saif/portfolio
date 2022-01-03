import { Landing } from "../components/Landing";
import { ThemeProvider } from "@mui/material";
import data from "./api/data.json";
import { theme } from "../theme";
import { Experience } from "../components/Experience";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Landing data={data.landing} />
        <Experience data={data.experience} />
      </div>
    </ThemeProvider>
  )
}
