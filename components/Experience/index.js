import Page from "../Page";
import { Box, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineContent, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector } from "@mui/lab";

export const Experience = ({ data }) => {
    const getDuration = (startDate, endDate) => {
        const now = new Date();

        let start = startDate.split("/");
        start = new Date(start[0] + "/01/" + start[1]);

        let end = endDate.split("/");
        end = new Date(end[0] + "/01/" + end[1]);

        if (end > now) {
            return new Date(now - start).getMonth() + 1;
        } else {
            return new Date(end - start).getMonth() + 1;
        }
    }

    return (
        <div>
            <Page>
                <Box mb="12rem">
                    <Typography fontSize="2.5rem" marginBottom="3rem" fontWeight="bold">Experience</Typography>
                </Box>
                <Timeline>
                    {data.map((exp, index) => {
                        if (exp.type === "education") {
                            return (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent>
                                        <Typography fontWeight="bold" fontSize="1.2rem">{exp.org}</Typography>
                                        <Typography>{exp.degree}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="complete" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography>{exp.startDate} - {exp.endDate}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        } else {
                            return (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent>
                                        <Box display="flex" flexDirection="column">
                                            <Typography fontWeight="bold" fontSize="1.2rem">{exp.org}</Typography>
                                            <Typography>{exp.title}</Typography>
                                        </Box>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="ongoing" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography>{exp.startDate} - {exp.endDate}</Typography>
                                        <Typography>{getDuration(exp.startDate, exp.endDate)} mo.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        }
                    })}
                </Timeline>
            </Page>
        </div>
    )
}
