import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import SparumPage from "./pages/SparumPage";

const router = createBrowserRouter([
    { path: '/', element: <PortfolioPage /> },
    { path: '/sparum', element: <SparumPage /> }
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}