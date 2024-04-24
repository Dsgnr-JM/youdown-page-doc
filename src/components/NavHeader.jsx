import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return(
        <header className="header-a fixed top-0 left-1/2 -translate-x-1/2 py-4 flex items-center justify-center gap-4 w-full">
            <NavLink to="/">Probar</NavLink>
            <NavLink to="/">Empezar</NavLink>
            <NavLink to="/">Documentacion</NavLink>
        </header>
    )
}