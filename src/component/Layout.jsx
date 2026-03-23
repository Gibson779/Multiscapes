
function Layout({navbarHeight, children}){

    return (
        <>
        <Navbar height= {navbarHeight}/>
        {children}
        </>

    )
}