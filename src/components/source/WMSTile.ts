import TileWMS from 'ol/source/TileWMS'

interface WMSTileProps {
  url: string
  params: { [key: string]: unknown }
}

const WMSTile = (props: WMSTileProps) => {
  const { url, params } = props
  return new TileWMS({
    url,
    params
  })
}

export default WMSTile
