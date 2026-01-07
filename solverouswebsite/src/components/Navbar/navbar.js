import logo from '../../assets/solverous_logo.png';
import Button from '../Buttons/button';
import button from '../Buttons/button'

function Navbar() {
  return (
    <header className=' flex flex-row items-center '>
      <div >
        <img src={logo} alt="logo" className=' w-[10%] '/>
      </div>
      <nav className=' cursor-pointer text-[#003058] flex flex-row space-x-10 w-[100%]'>
        <a>Home</a>
        <a>Services</a>
        <a>Clients</a>
        <a>About Us</a>
        <a>FAQs</a>
        <Button
          title="Contact Us"
          type="none"
        />
      </nav>
    </header>
  );
}

export default Navbar;