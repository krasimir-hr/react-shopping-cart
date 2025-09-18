import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.js'
import Home from './pages/Home';
import Shop from './pages/Shop';
import ItemPage from './pages/Item';
import Cart from './pages/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />},
      { path: "/shop", element: <Shop />},
      { path: "/shop/:id", element: <ItemPage />},
      { path: "/cart", element: <Cart />},
    ],
  },
])


const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);