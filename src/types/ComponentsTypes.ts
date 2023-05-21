export type buttonNavigationPropsType = {
    item : {
        name?: string, href?: string
    }
}
export enum smb {
    introduction = "introduction",
    experience = "experience",
    project = "project",
    skills = "skills", 
    contact = "contact"
  }

export type userInfoPropsType = {
    user : {
        email: string,
        name: string
    }
}