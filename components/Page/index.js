import { Box, Container } from "@mui/material";

const Page = ({ children, id, windowSize }) => {
    const getHeight = () => {
        if(windowSize < 680) {
            return "40px";
        } else {
            return "80px";
        }
    }

    return (
        <Box>
            <Container
             id={id}
                sx={{
                    paddingTop: "4rem",
                    paddingBottom: "4rem",
                    minHeight: `calc(100vh - ${getHeight()})`,
                    transform: `translateY(${getHeight()})`
                }}
            >
                {children}
            </Container>
        </ Box>
    )
}

export default Page;
