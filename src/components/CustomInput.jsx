import React from 'react';



const CustomInput = (props) => {
    const { type, name, placeholder, className } = props
    return (

        <div>
            <input type={type} name={name} className={`form-control ${className}`} placeholder={placeholder} />
        </div>
    )
}

export default CustomInput; 