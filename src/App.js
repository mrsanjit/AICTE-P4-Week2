import logo from './logo.svg';
import './App.css';
// import { Navigation } from '@mui/icons-material';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Navigation/HomeCarousel/pages/HomePage/HomePage';
import AliceCarousel from 'react-alice-carousel';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import ProductDetail from './components/Product/ProductDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import DeliveryAddressForm from './components/Checkout/DeliveryAddressForm';
import CustomerRouts from './Raouters/CustomerRouts';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import OrderSummary from './components/Checkout/OrderSummary';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[{
        path:"",
        element: <HomePage />
      },
      {
        path:"/product",
        element: <Product />
      },
      {
        path:"/cart",
        element: <Cart />
      },
      { path:'/OrderSummary',
        element: <OrderSummary />
      },
      {
        path:'ProductDetail',
        element: <ProductDetail />
      },
      {
        path:'/Checkout',
        element: <Checkout />
      },
      {
        path:'/DeliveryAddressForm',
        element: <DeliveryAddressForm />
      }
    
    ]

    }
   
  ])



  return (
    <>
      <div className="App">

        {/* <Navigation /> */}

        <div>
          {/* <HomePage />  */}

          {/* <Product/> */}
          {/* <ProductDetail /> */}
          {/* <Cart/> */}
          {/* <Checkout/> */}
          {/* <DeliveryAddressForm /> */}

        </div>

        <div>
          {/* <Footer /> */}
        </div>

        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;