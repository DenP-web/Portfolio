import React from 'react'
import { IProject } from '../../models'
import ProjectItem from '../ProjectItem'

interface ProjectListScrollProps {
  projects: IProject[]
}

const ProjectListScroll: React.FC<ProjectListScrollProps> = ({projects}) => {
  return (
    <div>
      {projects.map((item: IProject, index: number) => (
        <ProjectItem key={item.id} {...item} animIndex={index}  />
      ))}
    </div>
  )
}

export default ProjectListScroll
