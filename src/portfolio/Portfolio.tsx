import styles from "./portfolio.module.css"
import Typography from "@mui/material/Typography"
import Image from "./Image"
import Carousel from "./Carousel";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import seedImage from './static/seed.png';
import leafImage from './static/leaf.png';
import flowerImage from './static/flower.png';
import fruitImage from './static/fruit.png';

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

const projects = [
  {name: "Color Picker", description: "A website for choosing colors for draps"},
  {name: "HelpFightCovid", description: "A mobile app for creating and registering testing sites"},
  {name: "fITech", description: "A mobile app that helps manage workout schedule"},
  {name: "English Garden", description: "A website that provides information about English courses"}
]



function Projects() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        gap: "1em",
        marginBottom: "1em",
      }}
    >
      {projects.map((project, index) => {
        return (<Paper className={styles.projectCard} elevation={3} key={index}>
          {project.name}
          <br/>
          {project.description}
        </Paper>);
      })}

    </Box>
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

