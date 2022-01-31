import styles from "./about.module.css"
import { Typography } from "@mui/material"

const headerStyle = {
    width: "100%",
    fontSize: "8vw",
    color: "whitesmoke",
    textAlign: "center",
    marginBottom: "1em",
}

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
            <Typography variant="h5" sx={headerStyle}>
                Welcome to my portfolio
            </Typography>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <Typography variant="button" sx={textStyle}>
                    My name is Trung, a Software Engineer student at RMIT University Vietnam.
                </Typography>
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