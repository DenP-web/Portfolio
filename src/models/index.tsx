export interface ILink {
  href?: string;
  text?: string;
  to?: string;
  iconId?: string;
  className?: string[];
  id: number;
  srText?: string;
}

export interface ICertificat {
  id: number;
  imgUrl: string;
  alt: string;
}

export interface IProject {
  id: number;
  title: string;
  technologies: string[];
  href: string;
  gitUrl: string
  imgUrl: string;
}
