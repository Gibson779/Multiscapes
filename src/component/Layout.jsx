
import Navbar from "./Navbar";

export default function Layout ({navbarHeight,showHomeImage, children}){

    return (
        <>
        <Navbar height= {navbarHeight} showHomeImage={showHomeImage}/>
        {children}
        </>

    )
}