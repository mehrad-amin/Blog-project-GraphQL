import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h4>Error</h4>;

  const { author } = data;
  console.log(author);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10} direction="column" sx={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight="bold" mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} fontSize="1.2rem" fontWeight={500} mt={2}>
          <div
            dangerouslySetInnerHTML={{ __html: author.description.html }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" color="text.primary">
            <p style={{ color: "#2065e6ff" }}>BLOGS</p> {author.name}
          </Typography>
          <Grid container spacing={3}>
            {author.post.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} mt={3}>
                <CardEl
                  title={item.title}
                  slug={item.slug}
                  coverPhoto={item.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
