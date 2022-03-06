import styles from "./nontech.module.css";
import globalStyles from "../../global.module.css";
import Typography from "@mui/material/Typography";
import Fab from '@mui/material/Fab';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';

import classroomImg from "./static/classroom.jpg";
import videoImg from "./static/naune.jpg";

import useHovering from "../../hooks/useHovering";
import { Fade } from "react-awesome-reveal";

export default function NonTechPortfolio() {
    return (
        <div id="non-tech" className={globalStyles["center-flex"] + " " + styles["non-tech"]}>
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
            <Fade>
                <Typography variant="subtitle2" className={globalStyles["white-text"] + " " + styles["header-text"]}>
                    Besides coding, I have been teaching Communicative English since 2016 and achieved an 8.0 IELTS in 2019.
                    I also work in Equitable Learning Services at RMIT University as a Student Aid to help people with learning difficulties take notes in lectures.
                    In my free time, I enjoy running and making informative videos.
                </Typography>
            </Fade>

        </div>
    )
}

function Image(props: { imgPath: string, caption: string, url: string }) {
    const [isHovering, handleMouseOver, handleMouseOut] = useHovering();

    return (
        <div className={styles["image"]}>
            <Fade damping={0.4} direction="up" cascade>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} className={styles["image-container"]}>
                    <img alt={props.caption} src={props.imgPath} style={{ width: "100%" }} />
                    {isHovering && <FloatingButton url={props.url} />}
                </div>

                <Typography className={styles["caption"] + " " + globalStyles["quote"]} variant="caption">
                    {props.caption}
                </Typography>
            </Fade>

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