import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Ribbon from './pages/Ribbon';
import ViewDetailsGroupLifePopUpLongTermDisability from './pages/ViewDetailsGroupLifePopUpLongTermDisability';
import ViewDetailsGroupLifePopUpShortTermDisability from './pages/ViewDetailsGroupLifePopUpShortTermDisability';
import ViewDetailsGroupLifePopUpLifeInsurance from './pages/ViewDetailsGroupLifePopUpLifeInsurance';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ribbon" element={<Ribbon />} />
        <Route path="/view-details-group-life-pop-up-long-term-disability" element={<ViewDetailsGroupLifePopUpLongTermDisability />} />
        <Route path="/view-details-group-life-pop-up-short-term-disability" element={<ViewDetailsGroupLifePopUpShortTermDisability />} />
        <Route path="/view-details-group-life-pop-up-life-insurance" element={<ViewDetailsGroupLifePopUpLifeInsurance />} />
      </Routes>
    </BrowserRouter>
  );
}
