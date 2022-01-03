import { Box } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            padding: "0.5rem 0",
            transform: "translateY(80px)"
        }}>Copyright © {new Date().getFullYear()} Shayan. All Rights Reserved</Box>
    )
}

export default Footer;
