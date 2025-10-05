import { useMutation } from "@apollo/client/react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";

function CommentForm({ slug }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [sendComent, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  const CommentHandler = () => {
    if (name && email && text) {
      sendComent();
      console.log(data);
    } else {
      toast.warn("Please complete all fields.", {
        position: "top-center",
      });
    }
  };
  {
    data
      ? toast.success("Comment submitted and will be published after review.", {
          position: "top-center",
        })
      : console.log(error);
  }
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
          Comment submission form
        </Typography>
      </Grid>

      <Grid item size={12} m={2}>
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid item size={12} m={2}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid item size={12} m={2}>
        <TextField
          id="outlined-basic"
          label="Content"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(event) => setText(event.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item size={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            Sending...
          </Button>
        ) : (
          <Button variant="contained" onClick={CommentHandler}>
            Send Comment
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
