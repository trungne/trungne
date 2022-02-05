import styles from "./portfolio.module.css"
import globalStyles from "../global.module.css"
import Typography from "@mui/material/Typography"
import Carousel from "./Carousel";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ProjectPreview from "./Project";

import FirebaseContext from "../firebase/context";
import { useContext, useEffect, useState } from "react";
import githubIcon from "./static/github.png";
import chips from "../about/TechChip";
import { nanoid } from "nanoid";


function Header() {
  return (
    <div className={styles["header"]}>
      <Typography variant="h2" className={styles["text"]}>
        My Work
      </Typography>
    </div>
  )
}

function ProjectCard(props: {
  index: number,
  thumbnail: string,
  name: string,
  description: string,
  onProjectSelected: (i: number) => void
}) {
  return (
    <Card className={styles["project-card"]}>
      <CardActionArea sx={{ height: "100%" }} onClick={() => { props.onProjectSelected(props.index) }}>
        <CardMedia component="img" alt={props.description} />
        <CardContent>
          <Typography>
            {props.name}
          </Typography>
          <Typography>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function MadeWith(props: { imageUrls: string[] }) {
  return (
    <div className={globalStyles["center-flex"] + " " + styles["made-with"]}>
      <Typography variant="subtitle2" sx={{ color: "whitesmoke" }}>
        Made with
      </Typography>
      <Box display={"flex"} gap={"1em"}>
        {props.imageUrls.map(url => {
          return <div key={nanoid()}> {chips[url]} </div>;
        })}
      </Box>
    </div>
  )
}

const projectsBoxStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: "space-around",
  gap: "1em",
  marginBottom: "1em",
}

function ProjectShowCase() {
  const firebaseContext = useContext(FirebaseContext);
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(-1);

  const handleProjectSelected = (index: number) => {
    setCurrentProjectIndex(index);
  }

  useEffect(() => {
    if (firebaseContext) {
      firebaseContext.getProjects().then(
        projects => {
          setProjects(projects);
          setCurrentProjectIndex(0);
        }
      )
    }
  }, [firebaseContext]) // only run once

  return (
    <div>
      {projects.length > 0
        ? <Box sx={projectsBoxStyle}>
          {projects.map((project, index) => {
            return (<ProjectCard onProjectSelected={handleProjectSelected}
              key={index}
              index={index}
              name={project.name}
              thumbnail={project.thumbnail}
              description={project.description} />);
          })}
        </Box>
        : <Skeleton variant="rectangular" sx={{ backgroundColor: "gray" }} width={"100%"} height={200} />
      }

      <div className={globalStyles["center-flex"]}>
        {currentProjectIndex !== -1 && <Carousel images={projects[currentProjectIndex].previews} />
        }
      </div>

      {currentProjectIndex !== -1 && <MadeWith imageUrls={projects[currentProjectIndex].madeWith} />}

      <div className={globalStyles["center-flex"] + " " + styles["github-link"]}>
        <a href={currentProjectIndex !== -1 ? projects[currentProjectIndex].githubLink : "/" }>
          <img className={styles["github-icon"]} alt="github link" src={githubIcon} />
        </a>

      </div>

    </div>
  )
}


export default function Portfolio() {
  return (
    <div id="my-work" className={styles.portfolio}>
      <Header />
      <ProjectShowCase />
    </div>
  )
}

