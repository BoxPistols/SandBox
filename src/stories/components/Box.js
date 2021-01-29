import React from 'react'
import '../assets/style.css'
import './box.css'

function Box(props) {
    const { variant = '', rad = '', children, ...rest } = props
	return (
		<div className={`box box-${variant} rad-${rad}`} {...rest}>
             <p className="variant-name">{variant}</p>
             <p className="variant-code">$bg-{variant}</p>
            {/* {children} */}
		</div>
	)
}
export default Box
