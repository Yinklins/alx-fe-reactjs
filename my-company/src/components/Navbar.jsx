import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link to="/" className='links'>Home</Link> 
      <Link to="/About" className='links'>About</Link> 
      <Link to="/Contact" className='links'>Contact</Link> 
      <Link to="/Services" className='links'>Services</Link>
    </nav>
  );
}

export default Navbar;