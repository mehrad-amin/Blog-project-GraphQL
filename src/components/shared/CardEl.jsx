import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEl({ title, slug, coverPhoto, author }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        margin: "auto",
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              fontWeight="medium"
              fontSize="1.2rem"
            >
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
        sx={{ width: "100%", objectFit: "cover" }}
      />
      <CardContent>
        <Typography component="h3" variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 2 }}
          >
            Study the article
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEl;
