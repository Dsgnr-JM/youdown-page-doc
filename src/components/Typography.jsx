import propTypes from "prop-types";

const types = ['text-3xl my-3', 'text-xl my-2', 'text-base my-1']
const variantTypes = ['font-normal', 'font-semibold', 'font-bold','font-extrabold']
const colorTypes = ['text-black','text-red-500/85', 'text-red-600/60','text-gray-900/80']

export default function Typography({type, variant, children="",className="", color}) {
    return (
        type === 0 ?
            <h1 className={`${types[type]} ${className} ${variantTypes[variant]} ${colorTypes[color]}`}>
                {children}
            </h1>
        : type === 1 ?
            <h2 className={`${types[type]} ${className} ${variantTypes[variant]} ${colorTypes[color]}`}>

            </h2>
        : type === 3 ?
            <span className={`${types[type]} ${className} ${variantTypes[variant]} ${colorTypes[color]}`}>

            </span>
        : null

    )
}

Typography.propTypes = {
    type: propTypes.number,
    variant: propTypes.number,
    text: propTypes.string,
    className: propTypes.string,
    children: propTypes.string,
    color: propTypes.number
}