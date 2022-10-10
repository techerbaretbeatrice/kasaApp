import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="produit">Produit</Link>
              </li>
              <li>
                <Link to="*">Page Not Found</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="about/*" element={<About />}>
            </Route>
            <Route path="*" element={< PageNotFound />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="produit/*" element={<Produit />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <nav>
    <Link to="/">Home</Link>
  </nav>;
}

function About() {
  return <nav> <Link to="about">About</Link></nav>;
}

function PageNotFound() {
  return <nav><Link to="*">Page not Found</Link></nav>;
}
function Produit() {
  return <nav><Link to="produit/*">Produit</Link></nav>;
}


export default App;
