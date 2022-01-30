import styles from "./introduction.module.css";
import Avatar from '@mui/material/Avatar';
import myAvatar from "./static/avatar.png";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { nanoid } from 'nanoid'


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



function getOutlines() {
    return [
        <ListItem key={nanoid()}>
            <ListItemText
                primary="About me"
            />
        </ListItem>,
        <ListItem key={nanoid()}>
            <ListItemText
                primary="Tech Stuff"
            />
        </ListItem>,
        <ListItem key={nanoid()}>
            <ListItemText
                onClick={() => { console.log("Non-tech stuff") }}
                primary="Non-tech Stuff"
            />
        </ListItem>
    ]
}

const outlineItemStyle = {
    fontSize: "3em",
    transition: "font-size 300ms",
    
    '&:hover': {
        fontSize: "3.5em",
        opacity: [0.9, 0.8, 0.7],
    },

    "@media screen and (max-width: 760px)": {
        fontSize: "1em",
        '&:hover': {
            fontSize: "1.5em",
            opacity: [0.9, 0.8, 0.7],
        },
    },
}

function Outline() {
    return (
        <Box className={styles.outline} sx={{ width: 0.5 }}>
            <Typography sx={{marginBottom: "1em"}} className={styles.outlineHeader} variant="h2">
                Hi!
            </Typography>
            <div className={styles.outlineItems}>
                <Typography sx={outlineItemStyle} className={styles.outlineItem} variant="subtitle1">
                    About me
                </Typography>
                <Typography sx={outlineItemStyle} className={styles.outlineItem} variant="subtitle1">
                    Tech Stuff
                </Typography>
                <Typography sx={outlineItemStyle} className={styles.outlineItem} variant="subtitle1">
                    Non-tech Stuff
                </Typography>
            </div>

        </Box>
    )
}

export default function Introduction() {
    return (
        <Box className={styles.introduction}>
            <MyAvatar />
            <Outline />
        </Box>
    )
}