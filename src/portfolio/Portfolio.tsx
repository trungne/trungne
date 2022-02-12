import styles from "./portfolio.module.css"
import globalStyles from "../global.module.css"
import ProjectCard from "./ProjectCard";
import ProjectPreview from "./Project";
import FirebaseContext from "../firebase/context";

import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'; import Typography from "@mui/material/Typography"
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

interface MadeWithProps {
  madeWith: string[],
}
function MadeWith({ madeWith }: MadeWithProps) {
  return (
    <div className={globalStyles["center-flex"] + " " + styles["made-with"]}>
      <Typography variant="subtitle2" sx={{ color: "whitesmoke" }}>
        Made with
      </Typography>
      <Box display={"flex"} justifyContent={"center"} gap={"1em"}>
        {madeWith.map(url => {
          return <div key={nanoid()}> {chipsWithoutLabels[url]} </div>;
        })}
      </Box>
    </div>
  )
}

interface ProjectDescriptionProps {
  description: string,
  role: string,
  madeWith: string[],
  githubLink: string,
}
function ProjectDescription({ description, role, madeWith, githubLink }: ProjectDescriptionProps) {
  return (
    <div className={styles['project-description-container']}>
      <Typography className={`${globalStyles['white-text']} ${styles['description']}`} variant="h4">
        {description}
      </Typography>

      <Typography className={`${globalStyles['white-text']} ${styles['role']}`} variant="subtitle1">
        {role}
      </Typography>
      <MadeWith madeWith={madeWith} />
      <ExternalLink githubLink={githubLink} />
    </div>

  )
}

interface ProjectShowCaseProps {
  projects: ProjectPreview[],
  onProjectSelected: (i: number) => void,
}
function ProjectShowCase({
  projects,
  onProjectSelected }: ProjectShowCaseProps) {

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

interface ExternalLinkProps {
  githubLink: string,
  webLink?: string,
}
function ExternalLink({ githubLink, webLink }: ExternalLinkProps) {
  return (
    <div className={globalStyles["center-flex"] + " " + styles["external-link"]}>
      <a href={githubLink} target="_blank" rel="noreferrer">
        <Avatar alt="github link" src={githubIcon} />
      </a>

      {webLink && <a href={webLink} target="_blank" rel="noreferrer">
        <LinkOutlinedIcon sx={{ color: "whitesmoke" }} fontSize="large" />
      </a>}
    </div>
  )
}

export default function Portfolio() {
  const firebaseContext = useContext(FirebaseContext);
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [index, setIndex] = useState(-1);

  const onProjectSelected = (i: number) => {
    setIndex(i);
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
      <ProjectShowCase onProjectSelected={onProjectSelected} projects={projects} />
      
      <Slider images={index === -1 ? [] : projects[index].previews} />


      {index !== (-1)
        && <ProjectDescription
          madeWith={projects[index].madeWith}
          githubLink={projects[index].githubLink}
          role={projects[index].role}
          description={projects[index].description} />
      }


    </div>
  )
}

