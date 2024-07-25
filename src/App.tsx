import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import SparumPage from "./pages/SparumPage";
import SparumOfficePage from "./pages/SparumOfficePage";

const router = createBrowserRouter([
    { path: '/', element: <PortfolioPage /> },
    { path: '/sparum', element: <SparumPage /> },
    { path: '/sparum-office', element: <SparumOfficePage /> }
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}