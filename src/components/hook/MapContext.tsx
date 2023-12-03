// MapContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react'
import { Map } from 'ol'

interface MapContextProps {
  map: Map | undefined
  setMap: React.Dispatch<React.SetStateAction<Map | undefined>>
}

const MapContext = createContext<MapContextProps | undefined>(undefined)

export const MapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [map, setMap] = useState<Map | undefined>(undefined)

  return <MapContext.Provider value={{ map, setMap }}>{children}</MapContext.Provider>
}

export const useMap = () => {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error('useMap must be used within a MapProvider')
  }
  return context
}
