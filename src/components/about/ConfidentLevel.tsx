
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import globalStyles from "../global.module.css";

export type Star = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
const starColor = { color: "color: rgb(253, 253, 96)" }

export function TechAndConfidentLevel(props: { chip: JSX.Element, confidentLevel: Star }) {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            {props.chip}
            <ConfidentLevel level={props.confidentLevel} />
        </div>
    )
}

export default function ConfidentLevel(props: { level: Star }) {
    const fullStarNum: number = Math.floor(props.level);
    let stars: JSX.Element[] = [];

    for (let i = 0; i < fullStarNum; i++) {
        stars.push(<StarIcon key={i} style={starColor} />);
    }

    if (fullStarNum !== props.level) {
        stars.push(<StarHalfIcon key={fullStarNum + 1} style={starColor} />);
    }

    const emptyStarNum = Math.floor(5 - props.level);
    let emptyStars: JSX.Element[] = [];
    for (let i = 0; i < emptyStarNum; i++) {
        emptyStars.push(<StarOutlineIcon key={fullStarNum + 2 + i} style={starColor} />)
    }

    return (
        <div className={globalStyles["center-flex"]}>
            {stars.concat(emptyStars)}
        </div>
    );
}