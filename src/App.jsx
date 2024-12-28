import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import AvailableCats from './views/AvailableCats';

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/about-us'} element={<AboutUs />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
      </Route>
    </Routes>
  );
}

export default App;

