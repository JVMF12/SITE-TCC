import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Referencias from './pages/Referencias';
import Sobre from './pages/Sobre';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/referencias',
    element: <Referencias />,
  },
  {
    path: '/sobre',
    element: <Sobre />,
  },
]);

export default router;