import styles from "./nontech.module.css";
import globalStyles from "../global.module.css";
import Typography from "@mui/material/Typography";
import Fab from '@mui/material/Fab';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';

import classroomImg from "./static/classroom.jpg";
import videoImg from "./static/naune.jpg";
import { useState } from "react";

export default function NonTechPortfolio() {
    return (
        <div id="non-tech" className={styles["non-tech"]}>
            <Header />
            <div className={globalStyles["center-flex"] + " " + styles["images"]}>
                <Image url={"https://www.facebook.com/englishgardenVietNam/"} imgPath={classroomImg} caption={"My lovely students"} />

                <Image url={"https://www.youtube.com/channel/UCsyzWAjXCFveWqJhfqTf9yA"} imgPath={videoImg} caption={"Me trying to explain nothing is real"} />
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className={styles["header"] + " " + globalStyles["center-flex"]}>
            <Typography variant="h2" className={globalStyles["white-text"] + " " + styles["header-text"]}>
                Besides coding, I also enjoy teaching English and making informative videos
            </Typography>
        </div>
    )
}

function Image(props: { imgPath: string, caption: string, url: string }) {
    const [isHovering, setIsHovering] = useState(false);
    const hoveringStyle = {
        opacity: 0.5,
    }
    const nonHoveringStyle = {
        opacity: 1,
    }
    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <div className={styles["image"]}>
            <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} className={styles["image-container"]} style={isHovering ? hoveringStyle : nonHoveringStyle}>
                <img alt={props.caption} src={props.imgPath} style={{ width: "100%" }} />
                {isHovering && <FloatingButton url={props.url} />}
            </div>

            <Typography className={styles["caption"] + " " + globalStyles["quote"]} variant="caption">
                {props.caption}
            </Typography>
        </div>
    )
}

function FloatingButton(props: { url: string }) {
    return (
        <Fab href={props.url} target="_blank" className={styles["button"]} color="primary" aria-label="add">
            
                <LinkSharpIcon />
            
        </Fab>
    )
}