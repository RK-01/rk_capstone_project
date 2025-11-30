
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import BookingPage from './pages/BookingPage';

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/confirmation", element: <BookingConfirmationPage /> },
    { path: "/reservation", element: <BookingPage /> }
]);
function App() {

  return (<RouterProvider router={router} />);
}

export default App;
