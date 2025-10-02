'use client'
import InputField from "@/components/forms/InputField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import FooterLink from "@/components/forms/FooterLink"

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<{ email: string; password: string }>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onBlur'
    })

    const onSubmit = async (data: { email: string; password: string }) => {
        try {
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1 className="form-title">Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <InputField
                    name="email"
                    label="Email"
                    placeholder="khandelwalharshit96@gmail.com"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: 'Email is required',
                        pattern: {
                            value: /^\w+@\w+\.\w+$/,
                            message: 'Enter a valid email address'
                        }
                    }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    register={register}
                    type="password"
                    error={errors.password}
                    validation={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters'
                        }
                    }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </Button>

                <FooterLink text="Don’t have an account?" linkText="Create an Account" href="/sign-up" />
            </form>
        </>
    )
}

export default SignIn
