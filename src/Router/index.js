import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from '../pages/Home/Home';
import ErrorPage from '../pages/404Error';
import AboutPage from '../pages/AboutPage';
import ProductPage from '../pages/Produit';

const Router = () => <BrowserRouter>
    <div>
        <Routes>
            <Route path="about" element={<About />}>
            </Route>
            <Route path="produits/:id" element={<Produit />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="404" element={< PageNotFound />}>
            </Route>
            <Route path="*" element={< PageNotFound />}>
            </Route>
        </Routes>
    </div>
</BrowserRouter >

function Home() {
    return <div>
        <HomePage />
    </div>
}

function About() {
    return <div>
        <AboutPage />
    </div>
}

function PageNotFound() {
    return <div>
        <ErrorPage />
    </div>
}
function Produit() {
    return <div>
        <ProductPage />
    </div>;
}

export default Router