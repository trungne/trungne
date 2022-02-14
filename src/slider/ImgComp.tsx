
interface ImpCompProps {
    src: string,
    alt: string,
    onLoad: () => void,
    className: string,
}
const imgStyles: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
}
export default function ImgComp({src, alt, onLoad, className} : ImpCompProps){
    return <img className={className} onLoad={onLoad} src={src} alt={alt} style={imgStyles} />
}