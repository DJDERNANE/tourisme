
import './App.css';
import './index.css'
import LoginPage from './pages/Login';
import GuestRoute from './componenets/Routes/guestRoutes';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/Home';
import PlacesPage from './pages/places';
import HotelsPage from './pages/Hotels';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="places" element={<PlacesPage />} />
        <Route path="hotels" element={<HotelsPage />} />
        <Route element={<GuestRoute />}>
         
          <Route path="login" element={<LoginPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
