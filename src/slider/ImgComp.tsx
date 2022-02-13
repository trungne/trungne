interface ImpCompProps {
    src: string,
    alt: string,
    onLoad: () => void,
}
const imgStyles: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
}
export default function ImgComp({src, alt, onLoad} : ImpCompProps){
    return <img onLoad={onLoad} src={src} alt={alt} style={imgStyles} />
}