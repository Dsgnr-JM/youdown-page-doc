import { NavLink } from "react-router-dom"
import { RocketLaunchIcon } from "@heroicons/react/24/outline"

export default function NavBarDoc() {
    return(
        <nav className="w-64 h-screen bg-red-200/40 backdrop-blur-sm rounded-r-3xl">
            <ol className="p-2">
                <h1 className="font-bold text-xl text-center text-red-950 mb-5">Documentacion</h1>
                <li>
                    <NavLink to="/Get started" className="flex w-full p-2 rounded items-center justify-start gap-4 hover:bg-red-200/90">
                        <RocketLaunchIcon height="1rem" className="text-black/60"/>
                        Empezar
                    </NavLink>
                </li>
            </ol>
        </nav>
    )
}