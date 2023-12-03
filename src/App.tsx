import './App.css'
import ReMap from './components/map/ReMap'
import { MapProvider } from './components/hook/MapContext'
import Layers from './components/layers/Layers'
import OlTileLayer from './components/layers/OlTileLayer'
import { WMSTile } from './components/source/WMSTile'

function App() {
  return (
    <MapProvider>
      <div className='App'>
        <ReMap center={[-10997148, 4569099]} zoom={4}>
          <Layers>
            <OlTileLayer
              source={WMSTile({
                url: 'https://ahocevar.com/geoserver/wms',
                params: { LAYERS: 'topp:states' }
              })}
            ></OlTileLayer>
          </Layers>
        </ReMap>
      </div>
    </MapProvider>
  )
}

export default App
