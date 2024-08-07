'use client';

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1,'Email is required').email('Invalid email address'),
    password: z
        .string()
        .min(1, 'Password is required')
        .max(8, 'Password must have more than 8 characters'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match',
});

const SignUpForm = () => {
    const router = useRouter();
    const {toast} = useToast();
    // const {toast} = useToast();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    // Remove the duplicate declaration of onSubmit
    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/user', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword
            })
        })
    

        if (response.ok) {
            router.push('/sign-in');
        } else {
            console.error('Registration failed');
        }
    };
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className='space-y-2'>
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder='johndoe'{...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='john.doe@example.com' type='email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type='password' placeholder='Enter your password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type='password' placeholder='Re-enter your password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className='w-full mt-6' type='submit'>
                    Sign up
                </Button>
            </form>
            <div className='mx-auto my-4 flex w-full items-center justify-evenly 
            before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
            after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                or
            </div>
            <GoogleSignInButton>Sign In with Google</GoogleSignInButton>
            <p className='text-center text-sm text-gray-600 mt-2'>
                If you don&apos;t have an account, please&nbsp;
                <Link className='text-blue-500 hover:underline' href='/sign-in'>
                    Sign in
                </Link>
            </p>
        </Form>
    );
};

export default SignUpForm;


// 'use client';

// import { useForm } from "react-hook-form";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input"
// import { Button } from "../ui/button";
// import Link  from "next/link";

// const FormSchema = z.object({
//     email: z.string().min(1,'Email is required').email('Invalid email address'),
//     password: z.string()
//         .min(1, 'Password is required')
//         .max(8, 'Password must have than 8 charasters'),
// });

// const SignInForm = () => {
//     const form = useForm<z.infer<typeof FormSchema>>({
//         resolver: zodResolver(FormSchema),
//     });
//     const onSubmit = (values:z.infer<typeof FormSchema>) => {
//         console.log(values);
//     };
    
//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
//                 <div className='space-y-2'>
//                 <FormField
//                     control={form.control}
//                     name='username'
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Username</FormLabel>
//                             <FormControl>
//                                 <Input placeholder='jhonedoe' type='email' {...field} />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Password</FormLabel>
//                             <FormControl>
//                                 <Input type='password' placeholder="Enter your password" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
                        
//                     />
//                     <FormField
//                     control={form.control}
//                     name='confirmPassword'
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Re-enter your Password</FormLabel>
//                             <FormControl>
//                                 <Input type='password' placeholder='Re-enter your Password' {...field} />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                     </div>
//                 <Button className='w-full mt-6' type='submit'>
//                     Sign in
//                 </Button>
//             </form>
//             <div className='mx-auto my-4 flex w-full items-center justify-evenly 
//             before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
//             after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
//                 or
//             </div>
//             <p className='text-center text-sm text-gray-600 mt-2'>
//                 If you don&apos;t have an account, please&nbsp;
//                 <Link className='text-blue-500 hover:underline' href='/sign-in'>
//                     Sign in
//                 </Link>
//             </p>
//         </Form>
//     );
// };

// export default SignUpForm;