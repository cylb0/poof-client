import { menu } from "@constants/content/menu";
import { FC, useState } from "react";
import Burger from "@components/ui/Burger";
import { useAuth } from "@/hooks/auth/useAuth";

/**
 * Menu component displaying a navigation bar.
 * 
 * Content is generated dynamically from a constant file.
 * It generates both the top nav for desktop and the menu with burger icon for responsive display.
 */
const Menu:FC = () => {
    const { logout, token } = useAuth()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    const transitionStyle = "transition duration-500 ease-in-out"

    /**
     * Maps menu elements from constant file to JSX list items
     */
    const menuElements = menu.elements.map((element, index) => (
        <li key={index} className={`hover:text-quaternary ${transitionStyle}`}>
            <a href={element.link}>
                {element.title}
            </a>
        </li>
    ))

    const separator = <div key={"separator"} className="block md:hidden h-[1px] w-full bg-quaternary"></div>

    const loginElement = (
        <li key={"login"} className={`hover:text-quaternary ${transitionStyle}`}>
            <a href={menu.login.link}>
                {menu.login.title}
            </a>
        </li>
    )

    const logoutElement = (
        <li key={"logout"} className={`hover:text-quaternary ${transitionStyle}`}>
            <a href="#" onClick={logout}>
                {menu.logout.title}
            </a>
        </li>
    )

    const signUp = (
        <li key={"signup"} className={`hover:text-quaternary md:hover:text-inherit md:border md:p-[12px] rounded-md border-secondary md:hover:bg-secondary md:hover:border-ternary ${transitionStyle}`}>
            <a href={menu.signUp.link}>
                {menu.signUp.title}
            </a>
        </li>
    )

    menuElements.push(separator, !token ? loginElement : logoutElement, signUp)

    return (
        <>
            <nav className="flex text-sm justify-between items-center text-quinary border-b border-secondary font-roboto h-[80px] w-full fixed top-0 left-0 px-[20%]">
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