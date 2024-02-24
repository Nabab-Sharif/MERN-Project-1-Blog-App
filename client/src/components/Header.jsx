import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


const Header = () => {
  const path = useLocation().pathname;


  return (
    <>
      <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-800 via-pink-500 to-pink-500 text-white'>Nabab</span>
          Blog
        </Link>

        {/*.........Search bar Start..........*/}
        <form>
          <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        {/*.........Search bar End..........*/}

        {/*.........Dark Mode and Sign In Start..........*/}
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>

          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
          </Link>
          <Navbar.Toggle />
        </div>
        {/*.........Dark Mode and Sign In End..........*/}

        {/*.........Menu List Start.........*/}
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/about"} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/projects"} as={'div'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
        {/*.........Menu List End.........*/}

      </Navbar>
    </>
  )
}

export default Header