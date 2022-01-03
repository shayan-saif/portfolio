import Page from "../Page";
import { Box, Typography, Button } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Image from "next/image";
import arrow from "../../public/arrow_down.png";

export const Landing = ({ data }) => {
    return (
        <div>
            <Page>
                <Box mb="12rem">
                    <Typography fontSize="2.5rem" marginBottom="3rem" fontWeight="bold">{data.title}</Typography>
                    {data.body.map((paragraph, index) => <Typography fontSize="1.3rem" marginBottom="2rem" key={index}>{paragraph}</Typography>)}
                </Box>
                <Box sx={{
                    position: "relative",
                    bottom: "50px",
                    right: "80px"
                }}>
                    <Box sx={{
                        display: "flex",
                        gap: "1rem",
                        position: "absolute",
                        left: "10px"
                    }}>
                        <Typography marginBottom="1rem">Follow me!</Typography>
                        <Box><Image src={arrow} alt="arrow" height={40} width={40} /></Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: "2rem",
                }}>
                    <Button variant="contained" color="primary"><LinkedIn /> LinkedIn</Button>
                    <Button variant="contained" color="secondary"><GitHub /> GitHub</Button>
                </Box>
            </Page>
        </div>
    )
}
