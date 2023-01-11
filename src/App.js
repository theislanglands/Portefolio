import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route index exact element={<Home />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
