
function AnotherButton({ children, onClick }) {
    
    return (
        <button onClick={onClick} className="px-6 py-3 text-base text-white transition-all duration-300 bg-transparent border rounded border-stone-500 hover:bg-hover">
            {children}
        </button>
    )
}

export default AnotherButton
