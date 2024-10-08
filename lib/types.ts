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
  aboutList: aboutList[];
  skills: skill[];
  socials: social[];
  projects: project[];
}

export interface project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  categories: string[];
  link: string;
  github: string;
  projectSkills: skill[];
}

export type skill = {
  id: string;
  label: string;
}

export type social = {
  id: string;
  label: string;
  link: string;
}

export interface aboutData {
  alias: string;
  slogan: string;
  aboutMe: string;
  aboutList: aboutList[];
} 

type aboutList = {
  title: string;
  description: string;
  icon: string;
};

export interface profile {
    alias: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    birthDay: string;
    city: string;
    country: string;
    phone: string;
    email: string;
}
