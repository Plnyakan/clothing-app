import { FC, ButtonHTMLAttributes } from 'react';
import './button.styles.scss'


enum  BUTTON_TYPE_CLASSES { 
    google = 'google-sign-in',
    inverted = 'inverted',
}

export type ButtonProps = {
    children: string;
    buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>; //accepts otherprops parameters 

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps}) => {
    return (
        <button 
        className={`button-container 
        ${BUTTON_TYPE_CLASSES[buttonType]}`} 
        {...otherProps}>
        {children}
        </button>
    )
}

export default Button;