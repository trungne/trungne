import Chip from '@mui/material/Chip';
import Avatar from "@mui/material/Avatar";
import gitIcon from "./static/git.png";
import htmlIcon from "./static/html5.png";
import cssIcon from "./static/css.png";
import jsIcon from "./static/js.png";
import tsIcon from "./static/ts.png";
import javaIcon from "./static/java.png";
import pythonIcon from "./static/python.png";
import reactIcon from "./static/react.png";
import angularIcon from "./static/angular.png";
import androidStudioIcon from "./static/androidstudio.png";
import firebaseIcon from "./static/firebase.png";
import muiIcon from "./static/mui.png";
import primeNgIcon from "./static/primeng.png";

import { nanoid } from 'nanoid';
const chipStyle = {
    backgroundColor: "whitesmoke",
    fontWeight: 800,
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    fontSize: "1em",
}

function TechChip(props: { name: string, icon: string }) {
    return <Chip sx={chipStyle}
        label={props.name}
        avatar={<Avatar src={props.icon} />} />
}

interface ChipCmp {
    [key: string]: JSX.Element;
}

const chipsWithoutLabels: ChipCmp = {
    git: <Avatar key={nanoid()} src={gitIcon} />,
    html: <Avatar key={nanoid()} src={htmlIcon} />,
    css: <Avatar key={nanoid()} src={cssIcon} />,
    javascript: <Avatar key={nanoid()} src={jsIcon} />,
    typescript: <Avatar key={nanoid()} src={tsIcon} />,
    java: <Avatar key={nanoid()} src={javaIcon} />,
    python: <Avatar key={nanoid()} src={pythonIcon} />,
    react: <Avatar key={nanoid()} src={reactIcon} />,
    angular: <Avatar key={nanoid()} src={angularIcon} />,
    androidstudio: <Avatar key={nanoid()} src={androidStudioIcon} />,
    firebase: <Avatar key={nanoid()} src={firebaseIcon} />,
    mui: <Avatar key={nanoid()} src={muiIcon} />,
    primeng: <Avatar key={nanoid()} src={primeNgIcon} />,
}



const chips: ChipCmp = {
    git: <TechChip key={nanoid()} name="git" icon={gitIcon} />,
    html: <TechChip key={nanoid()} name="HTML5" icon={htmlIcon} />,
    css: <TechChip key={nanoid()} name="CSS3" icon={cssIcon} />,
    javascript: <TechChip key={nanoid()} name="JavaScript" icon={jsIcon} />,
    typescript: <TechChip key={nanoid()} name="TypeScript" icon={tsIcon} />,
    java: <TechChip key={nanoid()} name="Java" icon={javaIcon} />,
    python: <TechChip key={nanoid()} name="Python" icon={pythonIcon} />,
    react: <TechChip key={nanoid()} name="ReactJS" icon={reactIcon} />,
    angular: <TechChip key={nanoid()} name="Angular" icon={angularIcon} />,
    androidstudio: <TechChip key={nanoid()} name="Android Studio" icon={androidStudioIcon} />,
    firebase: <TechChip key={nanoid()} name="Firebase" icon={firebaseIcon} />,
    mui: <TechChip key={nanoid()} name="Mui" icon={muiIcon} />,
    primeng: <TechChip key={nanoid()} name="PrimeNG" icon={primeNgIcon} />,
};



export {chips, chipsWithoutLabels};


