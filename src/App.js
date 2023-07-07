//import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./app.scss"
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Faq from './pages/Faq/Faq';
import Terms from './pages/Terms/Terms'
import Refund from './pages/Refund/Refund'
import GiftCards from './pages/GiftCards/GiftCards'
import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Cart from './pages/Cart/Cart';
import OutdoorPlanters from './pages/OutdoorPlanters/OutdoorPlanters';
import CorporateGifting from './pages/CorporateGifting/CorporateGifting';
import Pots from './pages/Pots/Pots';
import Plants from './pages/Plants/Plants';
import Accessories from './pages/Accessories/Accessories'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "/terms-of-service",
        element: <Terms />
      },
      {
        path: "/refund-policy",
        element: <Refund />
      },
      {
        path: "/gift-cards",
        element: <GiftCards />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/create-account",
        element: <CreateAccount/>
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/outdoor-planters",
        element: <OutdoorPlanters/>
      },
      {
        path: "/corporate-gifting",
        element: <CorporateGifting/>
      },
      {
        path: "/pots",
        element: <Pots/>
      },
      {
        path: "/plants-only",
        element: <Plants/>
      },
      {
        path: "/accessories",
        element: <Accessories/>
      },
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
