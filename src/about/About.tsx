import styles from "./about.module.css"
import { Typography } from "@mui/material"
import profilePicture from "./static/profile-pic.png";

const textStyle = {
    width: "100%",
    fontSize: "3vw",
    color: "whitesmoke",
    textAlign: "center",
    marginBottom: "1em",
}


export default function About() {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.header} >

                <div className={styles.headerPictureContainer}>
                    <img className={styles.headerPicture} src={profilePicture} alt="profile" />
                </div>
                <div className={styles.headerText}>
                    <Typography variant="h3">
                        My name is Trung, a Software Engineer student at RMIT University Vietnam.
                    </Typography>
                </div>



            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>

                <Typography variant="h2" sx={textStyle}>
                    This is where I show case my projects
                </Typography>
                <Typography variant="h2" sx={textStyle}>
                    This is where I show case my projects
                </Typography>
            </div>

        </div>
    )
}