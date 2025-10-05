import { useQuery } from "@apollo/client/react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Author() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (error) return <h4>error</h4>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={4}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 3 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Author;
