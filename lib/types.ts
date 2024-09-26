export interface JcDev {
  firstName: string;
  lastName: string;
  alias: string;
  email: string;
  phone: string;
  birthDay: string;
  gender: string;
  city: string;
  country: string;
  profileImg: string;
  jobTitle: string;
  slogan: string;
  aboutMe: string;
  aboutList: AboutSection[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
}

export interface Project {
  title: string;
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

type AboutSection = {
  title: string;
  description: string;
  icon: string;
};
