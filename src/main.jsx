import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router';
import Root from './component/Page/Root/Root.jsx';
import Home from './component/Page/HomePageComponent/Home/Home.jsx';
import CategoryWiseNews from './component/Page/NavCategoryWiseNews/CategoryWiseNews.jsx';
import NewsDetails from './component/Page/NewsDetails/NewsDetails.jsx';
const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path : '/categorynews/:id',
        element : <CategoryWiseNews></CategoryWiseNews>
      },
      {
        path :'/specifiqNews/:id',
        element : <NewsDetails></NewsDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
);