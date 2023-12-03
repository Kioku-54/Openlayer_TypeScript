import { useEffect, useRef, ReactNode } from 'react'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import { useMap } from '../hook/MapContext'
import { OSM } from 'ol/source'

interface ReMapProps {
  center: [number, number]
  zoom: number
  children?: ReactNode
}

const ReMap = (props: ReMapProps) => {
  const { center, zoom, children } = props
  const { map, setMap } = useMap()
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const newMap = new Map({
        target: mapContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center,
          zoom
        })
      })

      setMap(newMap)

      return () => {
        newMap.setTarget(undefined)
        setMap(undefined)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={mapContainerRef} className='w-full h-full'>
      {children}
    </div>
  )
}

export default ReMap
