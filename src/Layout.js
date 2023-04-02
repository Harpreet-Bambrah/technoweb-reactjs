import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

const Layout = ()=>{
    
    const activetab =(id)=>{
        let navlen =  document.getElementsByClassName('navbar-link').length
        for(let a=0;a<navlen;a++){
            document.getElementsByClassName('navbar-link')[a].classList.remove('active1')
        }
        document.getElementById(id).className+=' active1'
    }
    return(
        <>
            <Navbar nav={activetab}/>
            <Outlet/>
            <Footer footer={activetab}/>
        </>
    )
}

export default Layout;