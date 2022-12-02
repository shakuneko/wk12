import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/products/category/Hiphop Team"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Hiphop Team
            </NavLink>
            <NavLink to="/products/category/Vocal Team"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Vocal Team
            </NavLink>
            {/* <NavLink to="/products/category/home-accessories"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Performance Team
            </NavLink> */}
            <NavLink to="/products/category/Performance Team"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Performance Team
            </NavLink>
            {/* <NavLink to="/products/category/textile"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Textile
            </NavLink>
            <NavLink to="/products/category/furniture"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Furniture
            </NavLink> */}
        </div>
    );
}