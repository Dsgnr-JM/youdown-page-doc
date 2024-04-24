import propTypes from "prop-types"
import { NavLink } from "react-router-dom"

let classBtn = ["bg-gray-300/60 hover:bg-gray-300/70 text-black/90", "bg-red-600/70 hover:bg-red-600/75 text-white/90"]

export default function Button({type=0,isNav, title, to="#"}) {
    const BtnC = `${classBtn[type]} px-3 py-2 rounded-2xl bg-gray-300/50 font-semibold`

    return (
        isNav ? 
        <NavLink to={to} className={BtnC}>{title}</NavLink>
        :
        <a href={to} target="_blank" className={BtnC}>
            {title}
        </a>
    )
}

Button.propTypes = {
    type: propTypes.number,
    isNav: propTypes.bool,
    title: propTypes.string,
    to: propTypes.string
}