import { useQuery } from "@apollo/client/react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CommentForm from "../comments/CommentForm";
import CommentsList from "../comments/CommentsList";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h4>error</h4>;
  const { post } = data;
  console.log(post);
  return (
    <Container maxWidth="lg">
      <Grid
        item
        size={12}
        mt={9}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          component="h2"
          variant="h4"
          color="primary"
          fontWeight={700}
        >
          {post.title}
        </Typography>
        <ArrowForwardRoundedIcon onClick={() => navigate(-1)} />
      </Grid>
      <Grid item size={12} mt={6}>
        <img
          src={post.coverPhoto.url}
          alt={post.slug}
          width="100%"
          height="auto"
          style={{
            borderRadius: 15,
            display: "flex",
            alignItems: "center",
          }}
        />
      </Grid>
      <Grid item size={12} mt={7} display="flex" alignItems="center">
        <Avatar
          src={post.author.avatar.url}
          sx={{ width: "80", height: "80", marginRight: 2 }}
        />
        <Box component="div">
          <Typography component="p" variant="h5" fontWeight={700}>
            {post.author.name}
          </Typography>
          <Typography component="p" variant="p" color="text.secondary">
            {post.author.field}
          </Typography>
        </Box>
      </Grid>
      <Grid item size={12} mt={5} fontSize="1.2rem" fontWeight={500}>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
      </Grid>
      <Grid item size={12}>
        <CommentForm slug={slug} />
      </Grid>
      <Grid item xs={12}>
        <CommentsList slug={slug} />
      </Grid>
    </Container>
  );
}

export default BlogPage;
