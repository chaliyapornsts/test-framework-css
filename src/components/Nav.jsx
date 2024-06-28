import {
    Navbar,
    NavbarBrand,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <Navbar className='px-5 shadow-lg'>
                <NavbarContainer className='justify-start p-5'>
                    <NavbarBrand>
                        <img src='./src/assets/Group 197.png' alt="Logo" width={40}/>
                    </NavbarBrand>
                    <NavbarList>
                        <NavbarItem className='pl-10'>Collections</NavbarItem>
                        <NavbarItem>Library</NavbarItem>
                        <NavbarItem>Artist</NavbarItem>
                        <NavbarItem>Exhibition</NavbarItem>
                        <NavbarItem>Art Competitions</NavbarItem>
                        <NavbarItem>Museum</NavbarItem>
                        <NavbarItem>Gallery</NavbarItem>
                        <NavbarItem>About</NavbarItem>
                    </NavbarList>
                </NavbarContainer>
            </Navbar>
        </div>
    )
}

export default Nav