import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <button className="navbar-toggler mr-4" type="button" data-toggle="collapse"
                    data-target="#navbarToggler" aria-controls="navbarToggler"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand mr-auto" to="/">COUNTERAPP</Link>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Header;