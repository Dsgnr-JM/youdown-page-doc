import { NavLink } from "react-router-dom";
import { FireIcon } from "@heroicons/react/16/solid";

export default function NavHeader() {
    return(
        <header className="header-a fixed w-[100vw] top-0 left-1/2 -translate-x-1/2 py-3">
            <div className="max-w-[50rem] m-auto flex justify-between items-center w-full h-auto">
                <NavLink to="/">
                    <FireIcon className="text-red-800" height="2rem"/>
                </NavLink>
            <div className="flex-1 flex justify-end gap-4">
                <NavLink to="https://stream.jdoxx.com/api/y2mate=" target="_blank">Probar</NavLink>
                <NavLink to="/doc">Documentacion</NavLink>
            </div>
            </div>
        </header>
    )
}