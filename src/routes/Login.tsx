import MenuLayout from "@components/layouts/MenuLayout"
import LoginForm from "@components/login/LoginForm"
import { FC } from "react"

const Login: FC = () => {
    return (
        <MenuLayout>
            <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center md:w-1/2 mx-auto px-[5%]">
                <div className="p-[40px] border border-quaternary rounded-lg backdrop-blur-sm">
                    <LoginForm />
                </div>
            </div>
        </MenuLayout>
    )
}

export default Login
