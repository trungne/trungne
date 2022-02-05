import Image from "./Image";

export default interface ProjectPreview {
    thumbnail: string,
    name: string,
    description: string,
    madeWith: string[],
    previews: Image[],
}