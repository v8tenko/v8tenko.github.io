import React, {useState} from 'react'
import DataHelper from "../utils/DataHelper";

export const ProjectContext = React.createContext(DataHelper.data[0])

export default function CurrentProjectProvider({children}) {

  const [currentProject, setCurrentProject] = useState(DataHelper.data[0])

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
