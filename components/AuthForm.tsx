"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(1, "Name is required") : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter()
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      if(type === 'sign-up'){
        toast.success('Account create successfully. Please sign in.')
        router.push('/sign-in')
      } else{
        toast.success('Sign in successfully.');
        router.push('/')
      }
    } catch (error) {
      console.error(error);
      toast.error(`There was an error signing ${error}}`)
    }
  }
  const isSignIn = type === "sign-in"; // Get boolean var
  //   const isSignOut

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">Intervu.ai</h2>
        </div>

        <h3>Practice job interview with AI</h3>

        <Form {...form}>
          <form
            id="form-rhf-demo"
            className="w-full space-y-6 mt-4 form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {!isSignIn && (
              <FormField 
                control={form.control} 
                name="name" 
                label="Name" 
                placeholder="Enter your name" 
                type="text">
              </FormField>)}
            {/* if it is not sign in show the Name input */}


            <FormField 
                control={form.control} 
                name="email" 
                label="Emaile" 
                placeholder="Enter your Email" 
                type="email">
              </FormField>

            <FormField 
                control={form.control} 
                name="password" 
                label="Password" 
                placeholder="Enter your password" 
                type="password">
              </FormField>

            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
            {isSignIn ? 'No account yet?' : 'Have an account already?'}
            <Link className="font-bold text-user-primary ml-1" href={!isSignIn ? '/sign-in' : '/sign-up'}>{!isSignIn ? "Sign In ": "Sign Up"}</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
