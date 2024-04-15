import {Link} from "react-router-dom";

const Header = () => {
    return (
        <main className="header_container">
            <header>
                <nav>
                    <Link to="/">Users</Link>
                    <Link to="/brands">Brands</Link>
                    <Link to="/">Inventory</Link>
                    <Link to="/">Vendors</Link>
                    <Link to="/">Purchase Orders</Link>
                    <Link to="/">Invoices</Link>
                    <Link to="/">Reports</Link>
                </nav>
            </header>
        </main>
    )
}

export default Header;