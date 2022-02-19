// import { Outlet, NavLink } from "react-router-dom";
import { Container, Nav, Link } from './AppBar.styled'

function AppBar() {
    return (
        <Container>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>

            
        </Container>
    );
}

export default AppBar;