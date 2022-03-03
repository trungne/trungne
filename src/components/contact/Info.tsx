import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import globalStyles from "../../global.module.css";
import styles from "./contact.module.css";
import githubIcon from "./static/github.png";
import gmailIcon from './static/gmail.png';
import zaloIcon from './static/zalo.png';

import { useState } from "react";

interface SnackBarProps {
    open: boolean,
    message: string,
    onClose: () => void,
}
function SnackBarCmp({ open, message, onClose }: SnackBarProps) {
    return (
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={open} autoHideDuration={4000} onClose={onClose}>
            <Alert onClose={onClose} severity="info" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default function Info() {
    const [info, setInfo] = useState<InfoCardProps>({ info: "" });
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const onCopied = () => {
        setOpenSnackBar(true);
    }

    const handleClick = ({ info, link }: InfoCardProps) => {
        setInfo({ info, link });
    }


    return (
        <div className={`${globalStyles['center-flex']} ${styles['info']}`}>
            <div className={styles['find-me']}>
                <Typography variant="h4" className={`${globalStyles["white-text"]} `}>
                    Find me at
                </Typography>

                {info && <InfoCard onCopied={onCopied} info={info.info} link={info.link} />}
            </div>

            <div className={styles['icon-container']}>
                <div className={styles['icon']} >
                    <img onClick={() => { handleClick({ info: "GitHub", link: "https://github.com/trungne" }) }} alt="github icon" src={githubIcon} />
                </div>

                <div className={styles['icon']} >
                    <img onClick={() => { handleClick({ info: "nguyenquochoangtrung@gmail.com", link: "" }) }} alt="gmail icon" src={gmailIcon} />
                </div>

                <div className={styles['icon']} >
                    <img onClick={() => { handleClick({ info: "+84 93 919 8601", link: "" }) }} alt="zalo icon" src={zaloIcon} />
                </div>
            </div>

            <SnackBarCmp onClose={() => { setOpenSnackBar(false) }} open={openSnackBar} message={"Copied"} />
        </div>
    )
}
interface InfoCardProps {
    info: string,
    link?: string,
    onCopied?: () => void,
}

const clickToSee = (
    <span style={{ fontStyle: "italic !important" }}>
        Click icon to reveal
    </span>
)
function InfoCard({ info, link, onCopied }: InfoCardProps) {

    const handleClick = () => {
        if (link) {
            Object.assign(document.createElement('a'), {
                target: '_blank',
                href: link,
            }).click();
        }
        else if (info) {
            navigator.clipboard.writeText(info.trim().replace(/\s/g, ''));
            onCopied?.call(null);
        }
    }
    return (
        <Tooltip disableHoverListener={!info} placement='left-start' title={link ? "Click to be redirected" : "Click to copy"}>
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