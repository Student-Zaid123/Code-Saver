import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

// Error page component for 404 or other route errors
const ErrorPage = () => (
  <div className="text-center text-red-500 p-6">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/pastes',
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/pastes/:id',
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/edit',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;