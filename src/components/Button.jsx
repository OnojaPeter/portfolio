function Button({children}) {
    return (
        <button className="px-6 py-3 text-base text-white transition-all duration-300 rounded bg-indigo-600 font-lato hover:bg-opacity-80">
            {children}
        </button>
    )
}

export default Button
