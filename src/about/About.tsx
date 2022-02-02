import styles from "./about.module.css"
import Typography from "@mui/material/Typography"
import profilePicture from "./static/profile-pic.png";
import Divider from "@mui/material/Divider";
import Chip from '@mui/material/Chip';
import Avatar from "@mui/material/Avatar";

import gitIcon from "./static/git.png";
import htmlIcon from "./static/html5.png";
import cssIcon from "./static/css.png";
import jsIcon from "./static/js.png";
import tsIcon from "./static/ts.png";
import javaIcon from "./static/java.png";
import pythonIcon from "./static/python.png";

import reactIcon from "./static/react.png";
import angularIcon from "./static/angular.png";
import androidStudioIcon from "./static/androidstudio.png";
import firebaseIcon from "./static/firebase.png";

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useEffect, useState } from "react";

function TechAndConfidentLevel(props: { icon: string, name: string, confidentLevel: Star }) {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <Chip className={styles.chip} label={props.name}
                avatar={<Avatar src={props.icon} />} />

            <ConfidentLevel level={props.confidentLevel} />

        </div>
    )
}


type Star = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
function ConfidentLevel(props: { level: Star }) {
    const fullStarNum: number = Math.floor(props.level);
    let stars: JSX.Element[] = [];

    for (let i = 0; i < fullStarNum; i++) {
        stars.push(<StarIcon className={styles.star} />);
    }

    if (fullStarNum !== props.level) {
        stars.push(<StarHalfIcon className={styles.star} />);
    }

    const emptyStarNum = Math.floor(5 - props.level);
    let emptyStars: JSX.Element[] = [];
    for (let i = 0; i < emptyStarNum; i++) {
        emptyStars.push(<StarOutlineIcon className={styles.star} />)
    }

    return (
        <div className={styles.starContainer}>
            {stars.concat(emptyStars)}
        </div>
    );
}

function Header() {
    return (
        <div className={styles.header} >
            <div className={styles.headerPictureContainer}>
                <img className={styles.headerPicture} src={profilePicture} alt="profile" />
            </div>
            <div className={styles.headerText}>
                <Typography variant="h4">
                    My name is Trung, a Software Engineer student at RMIT University Vietnam. I'm at an early stage of becoming a web and mobile app developer. I'm eager to learn new things and  work in a team.
                </Typography>
            </div>
        </div>
    );
}



function Experience() {
    return (
        <div className={styles.aboutTextContainer}>
            <ProgrammingLanguages />
            <Divider className={styles.divider + " " + styles.horizontalDivider} orientation="vertical" flexItem />
            <Technologies />
        </div>
    );
}

function ProgrammingLanguages() {
    return (
        <div className={styles.techContainer}>
            <Typography variant="h4" className={styles.aboutText}>
                Languages I'm familiar with
            </Typography>
            <div>
                <TechAndConfidentLevel name="HTML5" icon={htmlIcon} confidentLevel={5} />

                <TechAndConfidentLevel name="CSS3" icon={cssIcon} confidentLevel={4.5} />

                <TechAndConfidentLevel name="JavaScript" icon={jsIcon} confidentLevel={4} />

                <TechAndConfidentLevel name="TypeScript" icon={tsIcon} confidentLevel={4} />

                <TechAndConfidentLevel name="Java" icon={javaIcon} confidentLevel={4} />

                <TechAndConfidentLevel name="Python" icon={pythonIcon} confidentLevel={3} />

            </div>
        </div>
    )
}

function Technologies() {
    return (
        <div className={styles.techContainer}>
            <Typography variant="h4" className={styles.aboutText}>
                Technologies I can use
            </Typography>
            <div>
                <TechAndConfidentLevel name="Git" icon={gitIcon} confidentLevel={3} />

                <TechAndConfidentLevel name="ReactJS" icon={reactIcon} confidentLevel={2.5} />

                <TechAndConfidentLevel name="Angular" icon={angularIcon} confidentLevel={2} />

                <TechAndConfidentLevel name="Android Studio" icon={androidStudioIcon} confidentLevel={4} />

                <TechAndConfidentLevel name="Firebase" icon={firebaseIcon} confidentLevel={3} />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div id="about" className={styles.about}>
            <Header />
            <Divider className={styles.divider} light />
            <Experience />
        </div>
    )
}