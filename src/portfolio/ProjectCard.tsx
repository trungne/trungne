import useHovering from "../hooks/useHovering";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

import styles from './portfolio.module.css';

interface ProjectCardProps {
    index: number,
    thumbnail: string,
    onProjectSelected: (i: number) => void,
}

export default function ProjectCard( {
    index,
    thumbnail,
    onProjectSelected } : ProjectCardProps
  ) {
    const [isHovering, handleMouseOver, handleMouseOut] = useHovering();
  
    return (
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} className={styles["project-card"]}>
        <CardActionArea sx={{ height: "100%" }} onClick={() => { 
            window.location.replace("/#my-work")
            onProjectSelected(index) }}>
          {isHovering && <VisibilityRoundedIcon className={styles['click-to-view']} />}
          <CardMedia src={thumbnail} component="img" />
        </CardActionArea>
      </Card>
    )
  }