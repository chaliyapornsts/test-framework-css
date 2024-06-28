import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Collections from './components/Collections';
import ArtCollection from './components/ArtCollection';
import './index.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="/2" element={<ArtCollection />} />
      </Routes>
    </>
  )
}

export default App
