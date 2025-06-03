import React from 'react'
import { type ButtonProps } from '../../interfaces'



const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md' }) => {
    // Define size classes
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-5 py-3 text-lg',
    };

    const className = `bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 cursor-pointer`;

    return <button className={className}>{title}</button>;
};

export default Button;
