import styles from "./portfolio.module.css"
import Typography from "@mui/material/Typography"
import Carousel from "./Carousel";
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import ProjectPreview from "./Project";

import FirebaseContext from "../firebase/context";
import { useContext, useEffect, useState } from "react";
import Image from "./Image";

function Header() {
  return (
    <div className={styles.header}>
      <Typography variant="h4" className={styles.text}>
        My projects
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
  const [previews, setPreviews] = useState<Image[]>([]);
  const handleProjectSelected = (index: number) => {
    setPreviews(projects[index].previews);
  }
  useEffect(() => {
    if (firebaseContext) {
      firebaseContext.getProjects().then(
        projects => {
          setProjects(projects);
        }
      )
    }
  }, [firebaseContext]) // only run once

  return (
    <div>
      <Box sx={projectsBoxStyle}>
        {projects.map((project, index) => {
          return (<ProjectCard onProjectSelected={handleProjectSelected} 
            key={index} 
            index={index} 
            name={project.name} 
            description={project.description} />);
        })}
      </Box>

      <div className={styles.center}>
        {previews.length > 0 &&
          <Carousel images={previews} />
        }
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

