import { Container, Grid, Typography, Paper } from "@mui/material";
import Author from "../components/authors/Author";
import Blog from "../components/Blogs/Blog";

function Home() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }} columnSpacing={5}>
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Authors
          </Typography>
          <Author />
        </Grid>

        <Grid item size={{ xs: 12, md: 9 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Blogs
          </Typography>
          <Blog />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
