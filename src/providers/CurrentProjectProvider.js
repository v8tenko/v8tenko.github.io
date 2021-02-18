import React, {useState} from 'react'
import DataHelper from "../utils/DataHelper";

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
