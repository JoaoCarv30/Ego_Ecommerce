import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { FetchApiProvider } from './context/FetchApi.tsx';
import Cart from './pages/Cart/index.tsx';
import Errorpage from './pages/Errorpage/index.tsx';
import LayoutMain from './Layout/LayoutMainPage/index.tsx';
import HomePage from './pages/HomePage/index.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutMain />,  // Define LayoutMain como o layout principal
    children: [
      {
        index: true,            // Define como a página inicial
        element: <HomePage />,  // Renderiza a HomePage na rota "/"
      },
      {
        path: "cart",           // A rota para o carrinho será renderizada dentro do LayoutMain
        element: <Cart />,
      }
    ],
    errorElement: <Errorpage />,  // Página de erro
  },
]);

createRoot(document.getElementById('root')!).render(
  <FetchApiProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </FetchApiProvider>
);
