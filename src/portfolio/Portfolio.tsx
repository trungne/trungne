import styles from "./portfolio.module.css"
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

import chips from "../about/TechChip";



function Header() {
  return (
    <div className={styles.header}>
      <Typography variant="h4" className={styles.text}>
        My Work
      </Typography>
    </div>
  )
}

function ProjectCard(props: { index: number, name: string, description: string, onProjectSelected: (i: number) => void }) {
  return (
    <Card className={styles.projectCard}>
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
    <div>
      <Typography variant="subtitle2" sx={{ color: "whitesmoke" }}>
        Made with
      </Typography>
      <Box display={"flex"} gap={"1em"}>
        {props.imageUrls.map(url => {
          return chips[url]
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
              description={project.description} />);
          })}
        </Box>
        : <Skeleton variant="rectangular" sx={{ backgroundColor: "gray" }} width={"100%"} height={200} />
      }

      <div className={styles.center}>
        {currentProjectIndex !== -1 && <Carousel images={projects[currentProjectIndex].previews} />
        }
      </div>

      <div className={styles["made-with"]}>
        {currentProjectIndex !== -1 && <MadeWith imageUrls={projects[currentProjectIndex].madeWith} />}
      </div>

    </div>

  )
}


export default function Portfolio() {
  return (
    <div id="tech" className={styles.portfolio}>
      <Header />
      <ProjectShowCase />
    </div>
  )
}

