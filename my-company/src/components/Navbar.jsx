import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'style={{
        color:'white', 
        backgroundColor: 'skyblue', 
        textDecoration:'none',
        padding: '20px',
        display: 'block',
        justifyContent: 'center',
        }}>
      <Link to="/" className='links'>Home</Link> 
      <Link to="/About" className='links'>About</Link> 
      <Link to="/Contact" className='links'>Contact</Link> 
      <Link to="/Services" className='links'>Services</Link>
    </nav>
  );
}

export default Navbar;