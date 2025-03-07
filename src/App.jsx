import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Showcase from './components/showcase/Showcase';
import CountdownTimer from './components/Timer';
import Text from './components/text/Text';
import Photos from './components/Photos';
import Textt from './components/Textt';
import TableNumberDisplay from './components/TableNumberDisplay';
import GoogleMap from './components/GoogleMap';
import BackgroundMusic from './components/Bcgmusic';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={
          <>
            <Showcase />
            <CountdownTimer />
            <Text />
            <Photos />
            <Textt />
            <GoogleMap />
            <BackgroundMusic />
          </>
        } />

       
        <Route path="/:tableNumber" element={<TableNumberDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
