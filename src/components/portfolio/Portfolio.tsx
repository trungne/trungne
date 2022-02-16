import styles from "./portfolio.module.css"
import globalStyles from "../../global.module.css"
import ProjectCard from "./ProjectCard";
import ProjectPreview from "../../data-models/Project";
import FirebaseContext from "../../firebase/context";
import MadeWith from "./MadeWith";
import ExternalLink from "./ExternalLink";

import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { useContext, useEffect, useState } from "react";
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
      <div style={{
        margin: '1em 1em 1em 1em',
        padding: '1em 1em 1em 1em',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
        gap: '1em',
        backgroundColor: "rgba(220, 220, 220, 0.5)",
        borderRadius: '10px',

      }}>
        <MadeWith madeWith={madeWith} />
        <Divider orientation="vertical" flexItem />
        <ExternalLink githubLink={githubLink} />
      </div>

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