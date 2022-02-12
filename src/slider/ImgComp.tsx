interface ImpCompProps {
    src: string,
    alt: string,
}
const imgStyles: React.CSSProperties = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
}
export default function ImgComp({src, alt} : ImpCompProps){
    return <img src={src} alt={alt} style={imgStyles}>

    </img>
}