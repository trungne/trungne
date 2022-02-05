import styles from "./about.module.css"
import Typography from "@mui/material/Typography"
import profilePicture from "./static/profile-pic.png";
import Divider from "@mui/material/Divider";

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import chips from "./TechChip";

function TechAndConfidentLevel(props: { chip: JSX.Element, confidentLevel: Star }) {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            {props.chip}
            <ConfidentLevel level={props.confidentLevel} />
        </div>
    )
}

type Star = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
function ConfidentLevel(props: { level: Star }) {
    const fullStarNum: number = Math.floor(props.level);
    let stars: JSX.Element[] = [];

    for (let i = 0; i < fullStarNum; i++) {
        stars.push(<StarIcon key={i} className={styles.star} />);
    }

    if (fullStarNum !== props.level) {
        stars.push(<StarHalfIcon key={fullStarNum + 1} className={styles.star} />);
    }

    const emptyStarNum = Math.floor(5 - props.level);
    let emptyStars: JSX.Element[] = [];
    for (let i = 0; i < emptyStarNum; i++) {
        emptyStars.push(<StarOutlineIcon key={fullStarNum + 2 + i} className={styles.star} />)
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
                    My name is Trung, a Software Engineer student at RMIT University Vietnam. I'm at an early stage of becoming a web and mobile app developer. I'm eager to learn and keen on working in a team.
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
                <TechAndConfidentLevel chip={chips.html} confidentLevel={5} />

                <TechAndConfidentLevel chip={chips.css} confidentLevel={4.5} />

                <TechAndConfidentLevel chip={chips.javascript} confidentLevel={4} />

                <TechAndConfidentLevel chip={chips.typescript} confidentLevel={4} />

                <TechAndConfidentLevel chip={chips.java} confidentLevel={4} />

                <TechAndConfidentLevel chip={chips.python} confidentLevel={3} />

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
                <TechAndConfidentLevel chip={chips.git} confidentLevel={3} />

                <TechAndConfidentLevel chip={chips.react} confidentLevel={2.5} />

                <TechAndConfidentLevel chip={chips.angular} confidentLevel={2} />

                <TechAndConfidentLevel chip={chips.androidstudio} confidentLevel={4} />

                <TechAndConfidentLevel chip={chips.firebase} confidentLevel={3} />
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