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

import { Fragment, useContext, useEffect, useState } from "react";
import Slider from "../slider/Slider";
import { Fade } from "react-awesome-reveal";

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

      {projects.length > 0 &&
        <Box className={styles["project-box"]}>
          <Fade triggerOnce damping={0.1} cascade>
            {projects.map((project, index) => {
              return (<ProjectCard
                onProjectSelected={onProjectSelected}
                key={index}
                index={index}
                thumbnail={project.thumbnail}
              />);
            })}
          </Fade>
        </Box>

      }



    </div >
  )
}

export default function Portfolio() {
  const firebaseContext = useContext(FirebaseContext);
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [index, setIndex] = useState(0);

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
      <Fade damping={0.1}>
        <Header />
      </Fade>

      <ProjectShowCase onProjectSelected={onProjectSelected} projects={projects} />

      {projects.length > 0 && <Fragment>
        <Slider images={projects[index].previews} />
        <ProjectDescription
          madeWith={projects[index].madeWith}
          githubLink={projects[index].githubLink}
          role={projects[index].role}
          description={projects[index].description} />
      </Fragment>}

    </div>
  )
}