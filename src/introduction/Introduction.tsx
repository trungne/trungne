import styles from "./introduction.module.css";
import globalStyles from "../global.module.css"
import Avatar from '@mui/material/Avatar';
import myAvatar from "./static/avatar.png";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";

function MyAvatar() {
    return (
        <div className={globalStyles["center-flex"] + " " + styles["avatar-container"]}>
            <Avatar className={styles["avatar"]} alt="Trung's avatar" src={myAvatar} />
            <div className={styles.quote}>
                "I like to build stuff."
            </div>
        </div>
    )
}

function Outline() {
    return (
        <Box className={globalStyles["center-flex"] + " " + styles["outline"]}>
            <Typography sx={{ marginBottom: "1em" }} className={styles["outline-header"]} variant="h2">
                Hi!
            </Typography>
            <div className={styles["outline-items"]}>
                <Typography 
                className={globalStyles["white-text"] + " " + styles["outline-item"]} variant="subtitle1">
                    🧑
                    <Link sx={{ color: 'inherit', textDecoration: 'inherit' }} href="#about">
                        About me
                    </Link>

                </Typography>
                <Typography className={globalStyles["white-text"] + " " + styles["outline-item"]}variant="subtitle1">
                    👨‍💻
                    <Link sx={{ color: 'inherit', textDecoration: 'inherit' }} href="#tech">
                        My Projects
                    </Link>

                </Typography>
                <Typography className={globalStyles["white-text"] + " " + styles["outline-item"]} variant="subtitle1">
                    🔎
                    <Link sx={{ color: 'inherit', textDecoration: 'inherit' }} href="#non-tech">
                        Non-tech
                    </Link>
                </Typography>
            </div>

        </Box>
    )
}

export default function Introduction() {
    return (
        <div id="introduction" className={styles["introduction"]}>
            <MyAvatar />
            <Outline />
        </div>
    )
}