import { Box, Container } from "@mui/material";

const Page = ({ children, color }) => {

    return (
        <Box
            sx={{
                backgroundColor: `${color ? color : 'white'}`,
            }}
        >
            <Container
                sx={{
                    paddingTop: "4rem",
                    paddingBottom: "4rem",
                    minHeight: "100vh"
                }}
            >
                {children}
            </Container>
        </ Box>
    )
}

export default Page;
