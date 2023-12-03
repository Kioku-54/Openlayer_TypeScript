import { ReactNode, useEffect } from 'react'
import TileLayer from 'ol/layer/Tile'
import { TileWMS } from 'ol/source'
import { useMap } from '../hook/MapContext'

interface OlTileLayerProps {
  source: TileWMS
  children?: ReactNode
}

const OlTileLayer = (props: OlTileLayerProps) => {
  const { source, children } = props
  const { map } = useMap()

  useEffect(() => {
    if (map) {
      const tileLayer = new TileLayer({
        source
      })

      map.addLayer(tileLayer)

      return () => {
        if (map.getLayers().getArray().includes(tileLayer)) {
          map.removeLayer(tileLayer)
        }
      }
    }
  }, [map, source])

  return <>{children}</>
}

export default OlTileLayer
