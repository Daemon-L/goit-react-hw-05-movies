import { Outlet } from "react-router-dom";
import { Container, Nav, Link } from './AppBar.styled'

function AppBar() {
    return (
        <Container>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
            <Outlet />
        </Container>
    );
}
export default AppBar;