import styles from "./about.module.css";
import globalStyles from "../global.module.css";
import Typography from "@mui/material/Typography"
import profilePicture from "./static/profile-pic.png";
import Divider from "@mui/material/Divider";
import { chips } from "./TechChip";
import ExperienceCard from "./ExperienceCard";

function Header() {
    return (
        <div className={styles.header} >
            <div className={styles["header-picture-container"]}>
                <img className={styles["header-picture"]} src={profilePicture} alt="profile" />
            </div>
            <div className={styles["header-text"]}>
                <Typography variant="h4">
                    My name is Trung, a Software Engineer student at RMIT University Vietnam. I'm at an early stage of becoming a web and mobile app developer. I'm eager to learn and keen on working in a team.
                </Typography>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className={styles["experience"]}>
            <Typography variant="h4" className={styles["technologies-header"]}>
                I'm familiar with
            </Typography>
            <div className={`${styles["experience-card-container"]}`}>
                <ExperienceCard name="Front-end" children={[chips.html,
                chips.css,
                chips.javascript,
                chips.typescript,
                chips.react,
                ]} />

                <ExperienceCard name="Mobile Development" children={[
                    chips.androidstudio,
                    chips.java,
                ]} />

                <ExperienceCard name="Back-end" children={[
                    chips.firebase,
                ]} />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div id="about" className={globalStyles["center-flex"] + " " + styles["about"]}>
            <div className={styles["wave"]}>

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles["shape-fill"]}></path>

                </svg>
            </div>
            <Header />
            <Divider flexItem className={styles.divider} light />
            <Experience />
        </div>
    )
}