function Button( {c_color,onColorChange} ) {
    return ( 
        <>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={ { backgroundColor:c_color } } onClick={ ()=>onColorChange( (c_color) ) }>{c_color}</button>
        </>
    );
}

export default Button;