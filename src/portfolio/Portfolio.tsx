import styles from "./portfolio.module.css"
import Typography from "@mui/material/Typography"
import Image from "./Image"
import Carousel from "./Carousel";
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



import seedImage from './static/seed.png';
import leafImage from './static/leaf.png';
import flowerImage from './static/flower.png';
import fruitImage from './static/fruit.png';
import FirebaseContext from "../firebase/context";
import { useState } from "react";

const images: Image[] = [
  {
    label: 'Seed',
    imgPath: seedImage
  },
  {
    label: 'Leaf',
    imgPath: leafImage
  },
  {
    label: 'flower',
    imgPath: flowerImage
  },
  {
    label: 'Fruit',
    imgPath: fruitImage
  },
];



function Header() {
  return (
    <div className={styles.header}>
      <Typography variant="h4" className={styles.text}>
        My projects
      </Typography>
    </div>
  )
}

// const projects = [
//   { name: "Color Picker", description: "A website for choosing colors for draps" },
//   { name: "HelpFightCovid", description: "A mobile app for creating and registering testing sites" },
//   { name: "fITech", description: "A mobile app that helps manage workout schedule" },
//   { name: "English Garden", description: "A website that provides information about English courses" }
// ]


function ProjectCard(props: { name: string, description: string }) {
  return (
    <Card className={styles.projectCard}>
      <CardActionArea sx={{ height: "100%" }}>
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
function Projects() {
  // TODO: useState here to force rerender when finish getting data
  const [v, setVar] = useState(0);
  return (
    <FirebaseContext.Consumer>
      {/* {async (firebase) => {
        const projects = await firebase?.getProjects();
        if (projects == null || projects.length === 0) {
          return null;
        }

        return (<Box sx={projectsBoxStyle}>
          {projects.map((project, index) => {
            console.log(project);
            return (<ProjectCard key={index} name={project.name} description={project.description} />);
          })}

        </Box>)
      }} */}

      {firebase => {
        firebase?.getProjects().then(result => {
          setVar(1);
          const projects = result;
          return (<Box sx={projectsBoxStyle}>
            {projects.map((project, index) => {
              return (<ProjectCard key={index} name={project.name} description={project.description} />);
            })}
          </Box>)
        });
        return null;
      }}
    </FirebaseContext.Consumer>
  )
}

function ProjectShowCase() {
  return (
    <div>
      <Projects />

      <div className={styles.center}>
        <Carousel images={images} />
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

