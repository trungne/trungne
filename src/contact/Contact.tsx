import globalStyles from "../global.module.css";
import styles from "./contact.module.css";
import Typography from "@mui/material/Typography";
import Eyes from "./Eyes";

import SendEmail from "./SendEmail";


export default function Contact() {
    return (
        <div className={globalStyles["center-flex"] + " " + styles['contact']}>
            <Eyes/>
            <Typography variant="h4" className={globalStyles["white-text"]}>
                You can find me at
            </Typography>

            <SendEmail />

        </div>
    )
}