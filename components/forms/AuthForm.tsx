"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFieldBody, AuthFieldType } from "@/lib/types/authFieldTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type renderFormFieldType = {
  label: string;
  placeholder: string;
  field: object;
  inputType?: string;
  description?: string;
};

const renderFormField = ({
  label,
  placeholder,
  field,
  inputType = "text",
  description,
}: renderFormFieldType) => {
  return (
    <FormItem className="w-full">
      <FormLabel className="font-secondary text-lg font-medium">
        {label}
      </FormLabel>
      <FormControl>
        <Input placeholder={placeholder} type={inputType} {...field} />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

const AuthForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  });

  const form = useForm<AuthFieldType>({
    resolver: zodResolver(authFieldBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = (data: AuthFieldType) => {
    console.log(data);
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Link
        href={"/home"}
        className="group absolute right-0 top-0 m-[2.5vw] flex items-center justify-center gap-x-4"
      >
        <ArrowLeft
          size={32}
          className="transition-all duration-200 group-hover:mr-4"
        />
        <p className="font-secondary text-xl font-normal">
          Back to Home Screen
        </p>
      </Link>
      <div className="flex h-full w-1/2 flex-col items-center justify-center gap-y-[4vh]">
        <div className="flex w-full items-center justify-start gap-x-2">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <Image
              src={"/images/black_logo.svg"}
              alt="Muse-India Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="font-primary text-4xl font-medium">
              Welcome to Muse-India
            </h1>
            <p className="font-secondary text-xl font-normal">
              Please Register/Login to Continue
            </p>
          </div>
        </div>
        {isClient && (
          <Form {...form}>
            <form
              className="w-full space-y-[2vh]"
              onSubmit={form.handleSubmit(handleFormSubmit)}
            >
              <FormField
                control={form.control}
                render={({ field }) =>
                  renderFormField({
                    label: "Enter your email",
                    placeholder: "johndoe@host.com",
                    field,
                  })
                }
                name="email"
              />
              <FormField
                control={form.control}
                render={({ field }) =>
                  renderFormField({
                    label: "Enter Password",
                    placeholder: "8@#adoAA",
                    inputType: "password",
                    field,
                  })
                }
                name="password"
              />
              <div className="flex items-center justify-between font-secondary text-xl font-medium text-primary">
                <a>Show Password</a>
                <a>Forgot Password?</a>
              </div>
              <Button
                type="submit"
                className="shadow-glow transition ease-in-out active:scale-[98%]"
                size="wfull"
              >
                Continue
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
