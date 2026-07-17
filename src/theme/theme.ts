import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#D4AF37",
        },

        secondary: {
            main: "#1E1E1E",
        },

        background: {
            default: "#121212",
            paper: "#1E1E1E",
        },

        text: {
            primary: "#FFFFFF",
            secondary: "#BDBDBD",
        },
    },

    typography: {
        fontFamily: "Poppins, sans-serif",

        h4: {
            fontWeight: 700,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 12,
    },
});

export default theme;