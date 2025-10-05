import { useQuery } from "@apollo/client/react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function CommentsList({ slug }) {
  const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;
  if (error) return <h4>Error</h4>;
  console.log(data);
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item size={12} m={2}>
        <Typography component="p" variant="h5" fontWeight={700} color="primary">
          Comments
        </Typography>
      </Grid>
      {data.comments.map((comment) => (
        <Grid
          item
          size={12}
          key={comment.id}
          p={2}
          m={2}
          border="1px solid silver"
          borderRadius={1}
        >
          <Box
            dir="rtl"
            component="div"
            display="flex"
            alignItems="center"
            mt={3}
          >
            <Avatar>{comment.name[0]}</Avatar>
            <Typography component="p" variant="h6" fontWeight={700} mr={2}>
              {comment.name}
            </Typography>
          </Box>
          <Typography
            dir="rtl"
            component="p"
            variant="p"
            fontSize="1.2rem"
            mt={2}
          >
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default CommentsList;
