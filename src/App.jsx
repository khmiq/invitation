import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Showcase from './components/showcase/Showcase';
import CountdownTimer from './components/Timer';
import Text from './components/text/Text';
import Photos from './components/Photos';
import Textt from './components/Textt';
import TableNumberDisplay from './components/TableNumberDisplay';
import GoogleMap from './components/GoogleMap';
import BackgroundMusic from './components/Bcgmusic';

function App() {
  return (
    <Router>
      <Showcase />
      <CountdownTimer />
      <Text />
      <Photos />
      <Textt />

      {/* Wrap Route in <Routes> */}
      <Routes>
        <Route path="/:tableNumber" element={<TableNumberDisplay />} />
      </Routes>

      <GoogleMap />
      <BackgroundMusic />
    </Router>
  );
}

export default App;
