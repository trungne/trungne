import styles from "./introduction.module.css";
import Avatar from '@mui/material/Avatar';
import myAvatar from "./static/avatar.png";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";

function MyAvatar() {
    return (
        <div className={styles.avatarContainer}>
            <Avatar className={styles.avatar} sx={{
                width: "50%",
                height: "auto",
                "@media screen and (max-width: 760px)": {
                    width: "80%"
                },
            }} alt="Trung's avatar" src={myAvatar} />
            <div className={styles.quote}>
                "I like to build stuff."
            </div>
        </div>
    )
}

const outlineItemStyle = {
    fontSize: "5.5vmin",
    transition: "padding 300ms",
    display: "flex",
    justifyContent: "space-between",
    gap: "1em",
    '&:hover': {
        padding: ["0.1em", 0, "0.1em", 0],
        opacity: [0.9, 0.8, 0.7],
    },
}

function Outline() {
    return (
        <Box className={styles.outline} sx={{ width: 0.5 }}>
            <Typography sx={{ marginBottom: "1em" }} className={styles.outlineHeader} variant="h2">
                Hi!
            </Typography>
            <div className={styles.outlineItems}>
                <Typography sx={outlineItemStyle} className={styles.outlineItem} variant="subtitle1">
                    🧑
                    <Link sx={{ color: 'inherit', textDecoration: 'inherit' }} href="#about">
                        About me
                    </Link>

                </Typography>
                <Typography sx={outlineItemStyle} className={styles.outlineItem} variant="subtitle1">
                    👨‍💻
                    <Link sx={{ color: 'inherit', textDecoration: 'inherit' }} href="#tech">
                        My Projects
                    </Link>

                </Typography>
                <Typography sx={outlineItemStyle} className={styles.outlineItem} variant="subtitle1">
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
        <div id="introduction" className={styles.introduction}>
            <MyAvatar />
            <Outline />
        </div>
    )
}