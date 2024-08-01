import "./navbar.css";
import CartWidget from '../CartWidgets/CartWidget';


const Navbar = () => {

    return(
            
            <nav className="navbar">

                <div className="logNav">
                    <p>MI LOGO</p>
                </div>

                <div className="navbarLinks">   
                    <ul>
                        <li><a href="#">Inicio</a></li>

                        <li><a href="#">Productos</a></li>

                        <li><a href="#">Carrito</a></li>

                        <li><a href="#">Contacto</a></li>

                    </ul>
                    
                    
                    

                </div>
            
                
                    <CartWidget/>
                
            
            </nav>
        
        
    )
}

export default Navbar;