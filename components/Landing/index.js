import Page from "../Page";
import { Box, Typography, Button } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Image from "next/image";
import arrow from "../../public/arrow_down.png";

const Landing = ({ anchor, data, windowSize }) => {
    return (
        <div id={anchor}>
            <Page windowSize={windowSize}>
                <Box mb="12rem">
                    <Typography fontSize="2.5rem" marginBottom="3rem" fontWeight="bold">{data.title}</Typography>
                    {data.body.map((paragraph, index) => <Typography fontSize="1.3rem" marginBottom="2rem" key={index}>{paragraph}</Typography>)}
                </Box>
                <Box sx={{
                    position: "relative",
                    bottom: "50px",
                    right: "80px"
                }}>
                    {windowSize > 1350 &&
                        <Box sx={{
                            display: "flex",
                            gap: "1rem",
                            position: "absolute",
                            left: "10px"
                        }}>
                            <Typography marginBottom="1rem"><code>followMe()</code></Typography>
                            <Box><Image src={arrow} alt="arrow" height={40} width={40} /></Box>
                        </Box>
                    }
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: "2rem",
                }}>
                    
                    <a target="_blank" href={data.linkedin} rel="noopener noreferrer"><Button variant="contained" color="primary" sx={{ display: "flex", gap: "1rem"}}><LinkedIn /> LinkedIn</Button></a>
                    <a target="_blank" href={data.github} rel="noopener noreferrer"><Button variant="contained" color="secondary" sx={{ display: "flex", gap: "1rem"}}><GitHub /> GitHub</Button></a>
                </Box>
            </Page>
        </div>
    )
}

export default Landing;
