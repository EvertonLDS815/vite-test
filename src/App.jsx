import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Psd from './pages/Psd'
import Photos from './pages/Photos'
import Vector from './pages/Vector'
import Portifolio from './pages/Portifolio'

function App() {
  return (
                    // Rotas
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vector" element={<Vector />} />
          <Route path="/fotos" element={<Photos />} />
          <Route path="/psd" element={<Psd />} />
          <Route path="/portifolio" element={<Portifolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
