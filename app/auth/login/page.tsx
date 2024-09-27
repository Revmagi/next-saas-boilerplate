import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Logo from "@/components/blocks/Logo";


const LoginForm = () => {
  return (
    <div className="themes-wrapper bg-background w-full h-screen flex flex-col items-center justify-center px-4 ">
    <div className="flex justify-center mb-8">
    <Logo />
    </div>
    <Card className="mx-auto max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create an Account</CardTitle>
        <CardDescription>
          Enter your email below to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
          <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Sign in with Email
          </Button>

         <div className="relative my-3">
           <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
           </div>
           <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
            </div>
         </div>

          <Button variant="outline" className="w-full">
            <GithubIcon className="w-4 h-4 mr-2" /> Github
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground mt-4">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>
         </p>
      </CardContent>
    </Card>
    </div>

  );
};

export default LoginForm;
