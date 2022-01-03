import { createTheme } from "@mui/material";
import { yellow, green, gray } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        secondary: {
            main: 'rgba(80, 80, 80, 1)',
        },
        ongoing: {
            main: yellow['300']
        },
        complete: {
            main: green['300']
        },
    },
});
