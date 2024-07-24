import { menu } from "@constants/content/menu";
import { FC, useState } from "react";
import Burger from "@components/ui/Burger";

/**
 * Menu component displaying a navigation bar.
 * 
 * Content is generated dynamically from a constant file.
 * It generates both the top nav for desktop and the menu with burger icon for responsive display.
 */
const Menu:FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    const transitionStyle = "transition duration-500 ease-in-out"

    /**
     * Maps menu elements from constant file to JSX list items
     */
    const menuElements = menu.elements.map((element) => (
        <li className={`hover:text-quaternary ${transitionStyle}`}>
            <a href={element.link}>
                {element.title}
            </a>
        </li>
    ))

    const separator = <div className="block md:hidden h-[1px] w-full bg-quaternary"></div>

    const signIn = (
        <li className={`hover:text-quaternary ${transitionStyle}`}>
            <a href={menu.signIn.link}>
                {menu.signIn.title}
            </a>
        </li>
    )
    const signUp = (
        <li className={`hover:text-quaternary md:hover:text-inherit md:border md:p-[12px] rounded-md border-secondary md:hover:bg-secondary md:hover:border-ternary ${transitionStyle}`}>
            <a href={menu.signUp.link}>
                {menu.signUp.title}
            </a>
        </li>
    )

    menuElements.push(separator, signIn, signUp)

    return (
        <>
            <nav className="flex justify-between items-center text-quinary border-b border-quaternary font-roboto h-[80px] w-full fixed top-0 left-0 px-[20%]">
                <div>
                    <a href="/">logo</a>
                </div>
                <ul className="hidden md:flex list-none justify-end items-center gap-[40px] p-[25px]">
                    {menuElements}
                </ul>
                <Burger isOpen={isOpen} onClick={handleClick} />
            </nav>
            
            {isOpen && 
                <ul className="absolute flex flex-col gap-10 font-roboto text-2xl text-quinary top-[80px] w-full list-none p-[25px] p-e-[20px] md:hidden">
                    {menuElements}
                </ul>
            }
        </>
    )
}
export default Menu