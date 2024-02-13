import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import { RouterProvider } from "react-router-dom";
import router from "./Routing";
import ResponsiveAppBar from "./Components/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="appbar">
        <ResponsiveAppBar />
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
