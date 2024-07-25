import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { API_CONFIG } from "@constants/API_CONFIG";
import { toast } from "sonner";
import { loginContent } from "@constants/content/login";
import { useAuth } from "@/hooks/auth/useAuth";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(12).max(32),
})

const LoginForm: FC = () => {
    const { login } = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const url = `${API_CONFIG.apiUrl}/login`
            const formData = new FormData()
            formData.append('email', values.email)
            formData.append('password', values.password)

            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            })
            
            if (!response.ok) {
                throw new Error('Login error, please try again later.')
            }

            const data = await response.json()
            console.log(data.token.value)
            login(data.token.value)
            toast.success(data.message)
        } catch (error) {
            console.error((error as Error).message)
            toast.error((error as Error).message)
        }
    }

    const inputStyle = 'bg-transparent text-quinary placeholder:text-quaternary border-quaternary focus-visible:border-quinary rounded-lg'

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> 
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-quinary'>
                                {loginContent.email.label}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className={inputStyle}
                                    placeholder={loginContent.email.placeholder}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className='text-quaternary'>
                                {loginContent.email.description}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-quinary'>{loginContent.password.label}</FormLabel>
                            <FormControl>
                                <Input
                                    type='password'
                                    className={inputStyle}
                                    placeholder={loginContent.password.placeholder}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className='text-quaternary'>
                                {loginContent.password.description}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className='w-full text-quinary bg-transparent hover:text-secondary hover:bg-quinary border border-quinary rounded-lg'
                    type='submit'
                >
                    {loginContent.submit.text}
                </Button>
            </form>
        </Form>
    )
}

export default LoginForm