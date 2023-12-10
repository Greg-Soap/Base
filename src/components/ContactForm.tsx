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
import { Button } from './ui/button';

const formSchema = z.object({
  customerName: z.string().min(5, {
    message: 'Name must be at least 5 characters.',
  }),
  Phone: z.string().min(11, {
    message: 'Phone Number must be 11 digits',
  }),
  email: z
    .string()
    .min(5, {
      message: 'Email must be valid',
    })
    .email('This is not a valid email'),
});

export function CustomerForm({ onNext }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: '',
      email: '',
      Phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col  p-6 "
      >
        <FormField
          control={form.control}
          name="customerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Customer Name</FormLabel>
              <FormControl>
                <Input placeholder="Customer name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full items-center gap-4 pt-5 max-sm:flex-col">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 max-sm:w-full">
                <FormLabel className="font-semibold">Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem className="flex-1 max-sm:w-full">
                <FormLabel className="font-semibold">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="self-end p-6 px-0 max-lg:w-full">
          <Button
            variant={'default'}
            className="text-md rounded-full font-bold max-lg:w-full"
            onClick={onNext}
            type={'submit'}
            disabled={!form.formState.isValid}
          >
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}
