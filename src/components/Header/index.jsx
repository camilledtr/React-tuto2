import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/survey/3">Survey</NavLink>
            <NavLink to="/results">Results</NavLink>
            <NavLink to="/freelances">Freelances</NavLink>
        </nav>
    )
}

export default Header