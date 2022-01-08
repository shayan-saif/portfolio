import Page from "../Page";
import { Box, Button, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Card } from "@mui/material";
import Footer from "../Footer";

const Certifications = ({ anchor, data, windowSize }) => {

    const truncate = (text, length) => {
        if (text.length < length) { return text }
        else {
            return text.slice(0, length) + " ...";
        }
    }

    const getCols = () => {
        if (windowSize < 600) {
            return 1;
        } else if (windowSize < 1280) {
            return 2;
        } else {
            return 3;
        }
    }

    return (
        <div id={anchor}>
            <Page>
                <Box mb="4rem">
                    <Typography fontSize="2.5rem" marginBottom="3rem" fontWeight="bold">Certifications</Typography>
                </Box>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${getCols()}, 1fr)`,
                    gap: "1rem",
                }}>
                    {data.map((cert, index) => {
                        return (
                            <div key={index}>
                                <Card sx={{
                                    display: "inline-block",
                                    columnSpan: "1fr",
                                    position: "relative"
                                }}>
                                    <CardHeader title={cert.name} subheader={cert.dateAcquired} />
                                    <CardContent>
                                        <Typography>
                                            {truncate(cert.description, 150)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a target="_blank" href={cert.link} rel="noopener noreferrer">
                                            <Button size="small" color="primary">
                                                Learn More
                                            </Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    })}
                </Box>
            </Page>
            <Footer />
        </div>
    )
}

export default Certifications;
