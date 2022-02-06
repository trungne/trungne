import styles from "./nontech.module.css";
import globalStyles from "../global.module.css";
import Typography from "@mui/material/Typography";

import classroomImg from "./static/classroom.jpg";
import videoImg from "./static/naune.jpg";

export default function NonTechPortfolio() {
    return (
        <div id="non-tech" className={styles["non-tech"]}>
            <Header />
            <div className={globalStyles["center-flex"] + " " + styles["images"]}>
                <Image imgPath={classroomImg} caption={"My lovely students"} />

                <Image imgPath={videoImg} caption={"Me trying to explain nothing is real"} />
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className={styles["header"] + " " + globalStyles["center-flex"]}>
            <Typography variant="h2" className={globalStyles["white-text"]}>
                Besides coding, I also enjoy teaching English and making informative videos
            </Typography>
        </div>
    )
}

function Image(props: { imgPath: string, caption: string }) {
    return (
        <div className={styles["image"]}>
            <img alt={props.caption} src={props.imgPath} style={{width: "100%"}}/>
            <Typography className={styles["caption"] + " " + globalStyles["quote"]} variant="caption">
                {props.caption}
            </Typography>
        </div>
    )
}