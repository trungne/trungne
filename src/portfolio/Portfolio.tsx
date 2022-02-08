import styles from "./portfolio.module.css"
import globalStyles from "../global.module.css"
import Typography from "@mui/material/Typography"
import Backdrop from '@mui/material/Backdrop';
import Carousel from "./Carousel";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ProjectPreview from "./Project";
import Avatar from "@mui/material/Avatar";
import FirebaseContext from "../firebase/context";
import { useContext, useEffect, useState } from "react";
import githubIcon from "./static/github.png";
import { chipsWithoutLabels } from "../about/TechChip";
import { nanoid } from "nanoid";
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import useComponentVisible from "./useComponentVisible";
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
        <CardMedia src={props.thumbnail} component="img" alt={props.description} />
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
          return <div key={nanoid()}> {chipsWithoutLabels[url]} </div>;
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const handleProjectSelected = (index: number) => {
    setCurrentProjectIndex(index);
    setIsComponentVisible(true);
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

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isComponentVisible}

      >
        {projects && projects.length > 0 &&
          <div ref={ref} className={globalStyles["center-flex"] + " " + styles["project-info"]}>
            <Carousel images={projects[currentProjectIndex].previews} />
            <MadeWith imageUrls={projects[currentProjectIndex].madeWith} />
            <ExternalLink githubLink={projects[currentProjectIndex].githubLink} />
          </div>
        }
      </Backdrop>

    </div>
  )
}

function ExternalLink(props: { githubLink: string, webLink?: string }) {
  return (
    <div className={globalStyles["center-flex"] + " " + styles["external-link"]}>
      <a href={props.githubLink} target="_blank" rel="noreferrer">
        <Avatar alt="github link" src={githubIcon} />
      </a>

      {props.webLink && <a href={props.webLink} target="_blank" rel="noreferrer">
        <LinkOutlinedIcon sx={{ color: "whitesmoke" }} fontSize="large" />
      </a>}
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

