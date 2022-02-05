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
const chipStyle = {
    backgroundColor: "whitesmoke",
    marginTop: "1em",
    marginBottom: "1em",
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

const chips: any = {
    git: <TechChip name="git" icon={gitIcon} />,
    html: <TechChip name="HTML5" icon={htmlIcon} />,
    css: <TechChip name="CSS3" icon={cssIcon} />,
    javascript: <TechChip name="JavaScript" icon={jsIcon} />,
    typescript: <TechChip name="TypeScript" icon={tsIcon} />,
    java: <TechChip name="Java" icon={javaIcon} />,
    python: <TechChip name="Python" icon={pythonIcon} />,
    react: <TechChip name="ReactJS" icon={reactIcon} />,
    angular: <TechChip name="Angular" icon={angularIcon} />,
    androidstudio: <TechChip name="Android Studio" icon={androidStudioIcon} />,
    firebase: <TechChip name="Firebase" icon={firebaseIcon} />,
    mui: <TechChip name="Mui" icon={muiIcon} />,
    primeng: <TechChip name="PrimeNG" icon={primeNgIcon} />,
};

export default chips;

