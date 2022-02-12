interface ImpCompProps {
    src: string,
    alt: string,
}
const imgStyles: React.CSSProperties = {
    height: "100%",
    objectFit: "contain",
}
export default function ImgComp({src, alt} : ImpCompProps){
    return <img src={src} alt={alt} style={imgStyles}>

    </img>
}