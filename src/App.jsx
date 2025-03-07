import Showcase from './components/showcase/Showcase'
import './App.css'
import CountdownTimer from './components/Timer'
import Text from './components/text/Text'
import Photos from './components/Photos'
import Textt from './components/Textt'
import TableNumberDisplay from './components/TableNumberDisplay'
import GoogleMap from './components/GoogleMap'
import BackgroundMusic from './components/Bcgmusic'

function App() {


  return (
    <>
      <Showcase/>
      <CountdownTimer/>
      <Text/>
      <Photos/>
      <Textt/>
      <Route path="/:tableNumber" element={<TableNumberDisplay />} /> 
      <GoogleMap/>
      <BackgroundMusic/>
      
     
    </>
  )
}

export default App
