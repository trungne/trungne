import globalStyles from "../global.module.css";
import styles from "./contact.module.css";
import Typography from "@mui/material/Typography";

export default function Contact() {
    return (
        <div className={styles['contact']}>
            <Typography variant="h4" className={globalStyles["white-text"]}>
                You can find me at:
            </Typography>

        </div>
    )
}