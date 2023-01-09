import './App.css';

import routes from './Routes/Routes';

import { BrowserRouter as Router, Routes, Route,Outlet  } from 'react-router-dom'

import WebsiteLayout from './Layout/Website.layout'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route element={<WebsiteLayout> <Outlet /> </WebsiteLayout>}>
            {routes.map((featu) => featu.type === 'public' && (
              <Route element={featu.element} path={featu.path} exact={featu} />
            ))}
          </Route>
        </Routes>

        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
