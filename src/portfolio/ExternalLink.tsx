import globalStyles from "../global.module.css"
import styles from "./portfolio.module.css"
import Avatar from "@mui/material/Avatar";
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'; 

import githubIcon from "./static/github.png";

interface ExternalLinkProps {
    githubLink: string,
    webLink?: string,
}

export default function ExternalLink({ githubLink, webLink }: ExternalLinkProps) {
    return (
        <div className={globalStyles["center-flex"] + " " + styles["external-link"]}>
            <a href={githubLink} target="_blank" rel="noreferrer">
                <Avatar alt="github link" src={githubIcon} />
            </a>

            {webLink && <a href={webLink} target="_blank" rel="noreferrer">
                <LinkOutlinedIcon sx={{ color: "whitesmoke" }} fontSize="large" />
            </a>}
        </div>
    )
}