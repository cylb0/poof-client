import { FC } from "react";

type BurgerProps = {
    isOpen: boolean
    onClick: () => void
}

/**
 * Burger component with X animation on click
 * 
 * @param isOpen - Indicates if burger menu is open
 * @param onClick - Callback function to handle click evens
 */
const Burger:FC<BurgerProps> = ({ isOpen, onClick }) => {
    const baseStyle = "h-[1px] bg-quinary duration-500"

    return (
        <div 
            className="flex flex-col justify-between md:hidden h-[31px] w-[31px] py-[7px] px-[5px] hover: cursor-pointer"
            onClick={onClick}
        >
            <div className={`${baseStyle} transition-transform  ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
            <div className={`${baseStyle} transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`${baseStyle} transition-transform ${isOpen ? '-rotate-45 translate-y-[-8px]' : ''}`}></div>
        </div>
    )
}
export default Burger