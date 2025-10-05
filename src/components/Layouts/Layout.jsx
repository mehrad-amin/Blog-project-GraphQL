import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default Layout;
