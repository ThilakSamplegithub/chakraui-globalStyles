import {Routes,Route} from "react-router-dom"
import Listings from "./Listings"
import SingleProduct from "../Pages/SingleProduct"
import Notfound from "../Pages/Notfound"
export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/listings" element={<Listings/>} />
            <Route path="/listings/:id" element={<SingleProduct/>} />
            <Route path="*" element={<Notfound/>}/>
        </Routes>
        </>
    )
}