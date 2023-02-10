import { NavLink } from 'react-router-dom'


export default function NavBar() {

    return (
        <div className='bg-dark px-4'>
            
            <div className='d-flex justify-content-between align-items-end'>
                <h1 className='text-white m-0 mt-5'>Pokemon</h1>
                <ul className="navbar-nav flex-row justify-content-end gap-2">

                    <li className="nav-item">
                        <NavLink className='nav-link text-white px-3' to='/' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link text-white px-3' to='/Pokemones' >Pokemones</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link text-white px-3' to='/Login' >Login</NavLink>
                    </li>
                    
                </ul>
                
                
            </div>

        </div>
    )
}