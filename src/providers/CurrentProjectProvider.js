import React, {useState} from 'react'

export const ProjectContext = React.createContext(0)

export default function CurrentProjectProvider({children}) {

  const [currentProject, setCurrentProject] = useState(0)

  return (
    <ProjectContext.Provider value={
      [
        currentProject,
        setCurrentProject
      ]
    }>
      {children}
    </ProjectContext.Provider>
  )
}
