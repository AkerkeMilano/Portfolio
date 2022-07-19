import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

const Project = ({ project }) => {
  return (
    <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={project.img}
          alt="green iguana"
        />
        <CardContent height="400">
          <Typography gutterBottom variant="h6" component="div">
            {project.title}
          </Typography>
          <Typography
            gutterBottom
            variant="caption text"
            component="div"
            color="text.secondary"
          >
            {project.text}
          </Typography>
        </CardContent>
        <Button href={project.url} target="_blank">
          Project live
        </Button>
        <Button href={project.github} target="_blank">
          GitHub code
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default Project;
