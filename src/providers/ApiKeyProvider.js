import React, {useState} from 'react'

export const ApiKeyContext = React.createContext([])

export default function ApiKeyProvider({children}) {

  const [apiKey, setApiKey] = useState('')

  return (
    <ApiKeyContext.Provider value={[apiKey, setApiKey]}>
      {children}
    </ApiKeyContext.Provider>
  )
}
