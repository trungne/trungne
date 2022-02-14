import Divider from '@mui/material/Divider';

import ExternalLink from "../portfolio/ExternalLink"
import MadeWith from "../portfolio/MadeWith"

const style: React.CSSProperties = {
    margin: '1em 1em 1em 1em',
    padding: '1em 1em 1em 1em',
    display: 'flex',
    
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1em',
    backgroundColor: "rgba(220, 220, 220, 0.5)",
    borderRadius: '10px',
    
}
export default function Footer(){
    return (
        
        <div style={style}>
            <MadeWith madeWith={['react', 'mui', 'firebase']} />
            <Divider orientation="vertical" flexItem/>
            <ExternalLink githubLink="https://github.com/trungne/trungne"/>

        </div>
    )
}