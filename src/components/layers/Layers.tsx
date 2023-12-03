import { ReactNode } from 'react'
import { useMap } from '../hook/MapContext'

interface LayersProps {
  children?: ReactNode
}

const Layers = ({ children }: LayersProps) => {
  const { map } = useMap()

  if (children && map) {
    return <>{children}</>
  }

  return null
}

export default Layers
