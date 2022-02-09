import globalStyles from "../global.module.css";
import styles from "./contact.module.css";
import Typography from "@mui/material/Typography";
import Eyes from "./Eyes";
import useHovering from "../hooks/useHovering";

import SendEmail from "./SendEmail";


export default function Contact() {
    const [isHoveringEmail, setIsHoveringEmail, handleMouseOverEmail, handleMouseOutEmail] = useHovering();
    
    const [isHoveringContact, setIsHoveringContact, handleMouseOverContact, handleMouseOutContact] = useHovering();


    return (
        <div onMouseOver={handleMouseOverContact}
            onMouseLeave={handleMouseOutContact}
            className={globalStyles["center-flex"] + " " + styles['contact']}>
            <Eyes shut={!isHoveringContact} surprised={isHoveringEmail} />
            {/* <Typography variant="h4" className={globalStyles["white-text"]}>
            </Typography> */}
            <div onMouseOver={handleMouseOverEmail} onMouseLeave={handleMouseOutEmail}>
                <SendEmail />
            </div>
        </div>
    )
}