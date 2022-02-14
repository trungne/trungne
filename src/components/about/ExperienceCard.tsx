
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { cloneElement } from "react";

import styles from "./about.module.css";
import globalStyles from "../../global.module.css";

export default function ExperienceCard(props: { name: string, children: JSX.Element[] }) {
    return (
        <Card className={`${globalStyles['center-flex']} ${styles['experience-card']}`}>
            <CardContent className={`${styles['experience-card-content']}`}>
                <Typography variant='h2' sx={{ textAlign: "center", fontSize: "2em" }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
                <div style={{ width: '100%', flexWrap: 'wrap', gap: "10px" }} className={globalStyles['center-flex']}>
                    {props.children.map((e, idx) => {
                        return cloneElement(e, { key: idx });
                    })}
                </div>
            </CardContent>
        </Card>
    )
}