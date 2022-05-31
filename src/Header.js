
import Navbar from './Navbar.js';
import Logo from './Logo.js'
import Login from './Login.js'

const Header = () =>{
    return(
        <div style = {{display: 'flex'}}>
    <Logo />  
    <p style = {{color:'transparent'}}>----------------------------------------------------------------</p>
    <Navbar />
    <p style = {{color:'transparent'}}>--------------------------------------------------------------------</p>
    <Login />
    </div>

    )
}
export default Header