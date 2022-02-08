import MyImage from "./MyImage";

export default interface ProjectPreview {
    thumbnail: string,
    name: string,
    description: string,
    githubLink: string,
    madeWith: string[],
    previews: MyImage[],
}