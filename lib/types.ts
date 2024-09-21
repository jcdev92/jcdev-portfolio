export interface JcDev {
    firstName: string;
    lastName: string;
    alias: string;
    mail: string;
    phone: string;
    birthDay: string;
    gender: string;
    city: string
    country: string;
    profileImg: string;
    jobTitle: string;
    aboutMe: string;
    biography: string;
    bioImageLink: string;
    role: string;
    skills: Skill[];
    socials: Social[];
    projects: Project[];
}

export interface Project {
    label: string;
    description: string;
    coverImage: string;
    categories: string[];
    link: string;
    github: string;
    projectSkills: ProjectsSkill[];
}

export interface ProjectsSkill {
    skill: Skill;
}

export interface Skill {
    label: string;
}

export interface Social {
    label: string;
    link: string;
}
