import Menu from "@components/Menu";
import { FC, PropsWithChildren } from "react";

const MenuLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Menu />
            <main className="flex-grow mt-[80px]">{children}</main>
        </div>
    )
}

export default MenuLayout