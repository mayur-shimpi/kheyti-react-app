import React from 'react';

interface ButtonProps {
    name: string;
    onClick?: () => void;
    className?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ name, onClick, className }) => {
    return (
        <button onClick={onClick} className={`bg-primary border border-primary text-white px-8 py-2 rounded-full ${className || ''}`}>
            {name}
        </button>
    );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ name, onClick, className }) => {
    return (
        <button onClick={onClick} className={`bg-white border border-primary text-black500 px-8 py-2 rounded-full ${className || ''}`}>
            {name}
        </button>
    );
};