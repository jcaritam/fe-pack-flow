import { BrowserRouter, Routes, Route } from "react-router"
import ProductPage from "../pages/product"
import AppLayout from "../shared/layouts/app"
import DashboardPage from "@/pages/dashboard"
import RequestPage from "@/pages/request"


export const AppRouter = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={<DashboardPage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/requests" element={<RequestPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}