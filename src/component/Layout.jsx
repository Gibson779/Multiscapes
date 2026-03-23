
import Navbar from "./Navbar";

export default function Layout ({navbarHeight, children}){

    return (
        <>
        <Navbar height= {navbarHeight}/>
        {children}
        </>

    )
}