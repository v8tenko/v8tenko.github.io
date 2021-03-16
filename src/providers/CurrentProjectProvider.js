import React, {useState} from 'react'
import { isMobileOnly } from 'react-device-detect'

export const ProjectContext = React.createContext({})

export default function CurrentProjectProvider({children}) {

  const [currentProject, setCurrentProject] = useState(isMobileOnly ? -1 : 0)

  return (
    <ProjectContext.Provider value={
      {
        project: {currentProject, setCurrentProject},
      }
    }>
      {children}
    </ProjectContext.Provider>
  )
}
