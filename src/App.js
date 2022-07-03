import { Routes, Route } from 'react-router-dom';
import Bmi from './Route/Bmi';
import Home from './Route/home';
import Shopping from './Route/Shopping';
import Showcase from './Route/imggallery';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="bmi" element={<Bmi />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="shopping" element={<Shopping />} />
        </Route>
      </Routes>
    </>
  );
}