import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            Blog
          </Typography>
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
