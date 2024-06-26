'use client'

/* eslint-disable react/no-unescaped-entities */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardContent, Card } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from '@/components/ui/use-toast'

export function AuthForm() {
  const form = useForm()
  const handleSubmit = form.handleSubmit(async data => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })

      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
        variant: 'destructive'
      })
    }
  })

  return (
    <div className='flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-950'>
      <div className='w-full max-w-md space-y-4'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
            Sign in with a magic link
          </h1>
          <p className='mt-2 text-gray-500 dark:text-gray-400'>
            Enter your email address and we'll send you a magic link to sign in.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className='space-y-4 pt-5'>
              <div>
                <Label className='sr-only' htmlFor='email'>
                  Email address
                </Label>
                <Input
                  id='email'
                  placeholder='name@example.com'
                  required
                  type='email'
                  {...form.register('email')}
                />
              </div>
              <Button className='w-full' type='submit'>
                Send magic link
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
