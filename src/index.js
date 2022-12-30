import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { projectData } from './data/project-data';

import App from './pages/App/App';
import { Project } from './pages/Project/Project';

import './styles/global.scss';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/work/jek-academy', element: <Project
      title='jeK Academy'
      info={projectData[0]}
      imgSrc={projectData[0].imgArray}
    />
  },
  {
    path: '/work/quebrajazz', element: <Project
      title='Quebra Jazz'
      info={projectData[1]}
      imgSrc={projectData[1].imgArray}
    />
  },
  {
    path: '/work/ccdm', element: <Project
      title='CCDM'
      info={projectData[2]}
      imgSrc={projectData[2].imgArray}
    />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
