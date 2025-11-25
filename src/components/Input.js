import React from 'react';
import './Input.css';

/*
 * input с forwardRef для доступа к DOM-элементу
 * @param {Object} props - Свойства компонента
 * @param {React.Ref} ref - Ref для доступа к input элементу
 */
const Input = React.forwardRef((props, ref) => {
    return (
        <input 
            ref={ref} 
            className="custom-input" 
            {...props}  // Распространяем все остальные props
        />
    );
});

export default Input;