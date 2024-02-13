import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#012970",
    },
    secondary: {
      main: "#444444",
    },
    error: {
      main: "#dc3545",
    },
    warning: {
      main: "#ffc107",
    },
    info: {
      main: "#17a2b8",
    },
    success: {
      main: "#28a745",
    },
    text: {
      main: "#FF5733",
    },
    // background: {},
    // action: {},
    // divider: {},
    // common: {},
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    // fontSize: 12,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    // fontWeightBold: 700,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiInputLabel: {
      root: {
        color: "#000",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "1px solid #000",
        },
        "&:hover:not($disabled):before": {
          borderBottom: "2px solid #000",
        },
      },
    },
    MuiTypography: {
      root: {
        color: "#000",
      },
    },
    MuiCard: {
      root: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
});

export default theme;
