import styles from "./nontech.module.css";
import globalStyles from "../global.module.css";
import Typography from "@mui/material/Typography";
export default function NonTechPortfolio() {
    return (
        <div id="non-tech" className={styles["non-tech"]}>
            <Header />
        </div>
    )
}

function Header() {
    return (
        <div className={styles["header"] + " " + globalStyles["center-flex"]}>
            <Typography variant="h6" className={globalStyles["white-text"]}>
                Besides coding, I enjoy teaching English and making informative videos
            </Typography>
        </div>
    )
}