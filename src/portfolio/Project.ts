import Image from "./Image";

export default interface ProjectPreview {
    name: string,
    description: string,
    previews: Image[],
}