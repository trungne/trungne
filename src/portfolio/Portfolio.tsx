import styles from "./portfolio.module.css"
import globalStyles from "../global.module.css"
import ProjectCard from "./ProjectCard";
import ProjectPreview from "./Project";
import FirebaseContext from "../firebase/context";


import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState } from "react";
import githubIcon from "./static/github.png";
import { chipsWithoutLabels } from "../about/TechChip";
import { nanoid } from "nanoid";
// import anime from "animejs";
import Slider from "../slider/Slider";

function Header() {
  return (
    <div className={styles["header"]}>
      <Typography variant="h2" className={styles["text"]}>
        My Work
      </Typography>
    </div>
  )
}

function MadeWith(props: { imageUrls: string[] }) {
  return (
    <div className={globalStyles["center-flex"] + " " + styles["made-with"]}>
      <Typography variant="subtitle2" sx={{ color: "whitesmoke" }}>
        Made with
      </Typography>
      <Box display={"flex"} justifyContent={"center"} gap={"1em"}>
        {props.imageUrls.map(url => {
          return <div key={nanoid()}> {chipsWithoutLabels[url]} </div>;
        })}
      </Box>
    </div>
  )
}

interface ProjectDescriptionProps {
  description: string,
  role: string,
}
function ProjectDescription({ description, role }: ProjectDescriptionProps) {
  return (
    <div className={styles['project-description-container']}>
      <Typography className={`${globalStyles['white-text']} ${styles['description']}`} variant="h4">
        {description}
      </Typography>

      <Typography className={`${globalStyles['white-text']} ${styles['role']}`} variant="subtitle1">
        {role}
      </Typography>
    </div>

  )
}

interface ProjectShowCaseProps {
  projects: ProjectPreview[],
  onProjectSelected: (i: number) => void,
}
function ProjectShowCase( {
  projects,
  onProjectSelected} : ProjectShowCaseProps) {

  return (
    <div className={styles["project-showcase"]}>
      {projects.length > 0 && <Box className={styles["project-box"]}>
        {projects.map((project, index) => {
          return (<ProjectCard
            onProjectSelected={onProjectSelected}
            key={index}
            index={index}
            thumbnail={project.thumbnail}
            />);
        })}
      </Box>
      }
    </div>
  )
}

function ExternalLink(props: { githubLink: string, webLink?: string }) {
  return (
    <div className={globalStyles["center-flex"] + " " + styles["external-link"]}>
      <a href={props.githubLink} target="_blank" rel="noreferrer">
        <Avatar alt="github link" src={githubIcon} />
      </a>

      {/* {props.webLink && <a href={props.webLink} target="_blank" rel="noreferrer">
        <LinkOutlinedIcon sx={{ color: "whitesmoke" }} fontSize="large" />
      </a>} */}
    </div>
  )
}

export default function Portfolio() {
  const firebaseContext = useContext(FirebaseContext);
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [description, setDescription] = useState("Hover/Click on a project");
  const [role, setRole] = useState(" ");

  const onProjectSelected = (i: number) => {
    setCurrentProjectIndex(i);
    setDescription(projects[i].description);
    setRole(projects[i].role);
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
    <div id="my-work" style={{ position: "relative" }} className={styles['portfolio']}>
      <Header />
      {projects.length > 0 && <Slider images={projects[currentProjectIndex].previews} />}
      
      <ProjectDescription role={role} description={description} />
      <ProjectShowCase onProjectSelected={onProjectSelected} projects={projects} />
    </div>
  )
}

/* <svg id="visual" viewBox="0 0 960 300" width="100vw" height="900" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <g transform="translate(476.9861764361457 145.54687535613897)"><path id="blob1" d="M29.7 -52.7C35.8 -48 36.1 -34.5 36.4 -24.2C36.8 -14 37.1 -7 41.9 2.7C46.7 12.5 55.8 25 55 34.4C54.1 43.8 43.3 50 32.5 55.9C21.7 61.9 10.8 67.4 1.1 65.6C-8.7 63.7 -17.3 54.4 -23.8 45.9C-30.3 37.5 -34.6 30 -36.8 22.5C-39 15 -39 7.5 -41.6 -1.5C-44.2 -10.5 -49.4 -21 -49 -31.7C-48.7 -42.4 -42.9 -53.2 -33.8 -56.1C-24.7 -59.1 -12.3 -54 -0.3 -53.6C11.8 -53.2 23.7 -57.3 29.7 -52.7" fill="#66b2b2"></path>
        </g>
        <g transform="translate(488.4817359380315 152.4326162800107)"><path id="blob2" d="M30.1 -56.5C35.5 -49 34 -33.9 35.7 -23.2C37.3 -12.5 42.2 -6.3 46.4 2.5C50.7 11.2 54.3 22.3 52.5 32.7C50.7 43.1 43.3 52.7 33.7 56.2C24 59.6 12 56.8 2.3 52.7C-7.3 48.7 -14.7 43.4 -25.5 40.7C-36.3 37.9 -50.6 37.7 -59.1 31.4C-67.6 25 -70.3 12.5 -69.9 0.3C-69.5 -12 -65.9 -24 -57.2 -30.1C-48.6 -36.1 -34.8 -36.2 -24.4 -40.9C-14 -45.6 -7 -54.8 2.7 -59.4C12.3 -64 24.7 -64.1 30.1 -56.5" fill="#66b2b2"></path></g>
      </svg> */


// useEffect(() => {
  //   anime({
  //     targets: "#blob1",

  //     translateX: function() {
  //       return anime.random(0, 270);
  //     },
  //     translateY: function() {
  //       return anime.random(0, 270);
  //     },
  //     direction: 'alternate',

  //     easing: 'linear',
  //     loop: true,
  //     duration: 300,
  //   });
  //   anime({
  //     targets: "#blob2",

  //     translateX: function() {
  //       return anime.random(0, 600);
  //     },
  //     translateY: function() {
  //       return anime.random(0, 600);
  //     },
  //     direction: 'alternate',
  //     easing: 'linear',
  //     loop: true,
  //     duration: 3000,
  //   });
  // }, [])

  // https://github.com/fireship-io/wavy-curvey-blobby-website/blob/main/index.html

