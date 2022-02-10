import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

import globalStyles from "../global.module.css";
import styles from "./contact.module.css";
import githubIcon from "./static/github.png";
import gmailIcon from './static/gmail.png';
import zaloIcon from './static/zalo.png';

import { useState } from "react";

export default function Info() {
    const [info, setInfo] = useState<InfoCardProps>({ info: "" });

    return (
        <div className={`${globalStyles['center-flex']} ${styles['info']}`}>
            <div className={styles['find-me']}>
                <Typography variant="h4" className={`${globalStyles["white-text"]} `}>
                    Find me at
                </Typography>

                {info && <InfoCard info={info.info} link={info.link} />}
            </div>

            <div className={styles['icon-container']}>
                {/* <a href="https://github.com/trungne" rel="noreferrer" target="_blank"> */}
                <img onClick={() => { setInfo({ info: "GitHub", link: "https://github.com/trungne" }) }} className={styles['icon']} alt="github icon" src={githubIcon} />
                <img onClick={() => { setInfo({ info: "nguyenquochoangtrung@gmail.com", link: "" }) }} className={styles['icon']} alt="gmail icon" src={gmailIcon} />
                <img onClick={() => { setInfo({ info: "+84 93 919 8601", link: "" }) }} className={styles['icon']} alt="zalo icon" src={zaloIcon} />
            </div>


        </div>
    )
}
interface InfoCardProps {
    info: string,
    link?: string,

}
function InfoCard({ info, link }: InfoCardProps) {
    const clickToSee = (
        <span style={{fontStyle: "italic !important"}}>
            Click to reveal
        </span>
    )
    const handleClick = () => {
        if (link) {
            Object.assign(document.createElement('a'), {
                target: '_blank',
                href: link,
            }).click();
        }
        else {
            navigator.clipboard.writeText(info.trim().replace(/\s/g, ''))
        }
    }
    return (
        <Tooltip disableHoverListener={!info} placement='left-start' title={link ? "Click to redirect" : "Click to copy" }>
            <Paper className={styles['paper']} elevation={3}>
                <Typography variant="caption" className={`${styles['text']}`}>
                    <div onClick={handleClick}>
                        {info ? info : clickToSee}
                    </div>
                </Typography>
            </Paper>
        </Tooltip>

    )
}