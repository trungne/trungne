import globalStyles from "../global.module.css";
import styles from "./portfolio.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { nanoid } from "nanoid";
import { chipsWithoutLabels } from "../about/TechChip";

interface MadeWithProps {
    madeWith: string[],
}
export default function MadeWith({ madeWith }: MadeWithProps) {
    return (
        <div className={globalStyles["center-flex"] + " " + styles["made-with"]}>
            <Typography variant="subtitle2" sx={{ color: "whitesmoke" }}>
                Made with
            </Typography>
            <Box display={"flex"} justifyContent={"center"} gap={"1em"}>
                {madeWith.map(url => {
                    return <div key={nanoid()}> {chipsWithoutLabels[url]} </div>;
                })}
            </Box>
        </div>
    )
}