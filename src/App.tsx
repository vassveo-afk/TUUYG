import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merci" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}
