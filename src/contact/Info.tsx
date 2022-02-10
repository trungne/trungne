import Typography from "@mui/material/Typography";

import globalStyles from "../global.module.css";
import styles from "./contact.module.css";
import githubIcon from "./static/github.png";
import gmailIcon from './static/gmail.png';
import zaloIcon from './static/zalo.png';



export default function Info() {
    return (
        <div className={`${globalStyles['center-flex']} ${styles['info']}`}>
            <Typography variant="h4" className={`${globalStyles["white-text"]} ${styles['text']}`}>
                Find me at
            </Typography>
            <div className={styles['icon-container']}>
                {/* <a href="https://github.com/trungne" rel="noreferrer" target="_blank"> */}
                <img className={styles['icon']} alt="github icon" src={githubIcon} />
                <img className={styles['icon']} alt="gmail icon" src={gmailIcon} />
                <img className={styles['icon']} alt="zalo icon" src={zaloIcon} />
            </div>


        </div>
    )
}