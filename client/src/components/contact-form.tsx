import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: 'Message sent!',
        description: 'Thank you for reaching out. We will get back to you soon.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  {...field} 
                  className="px-4 py-3 rounded-lg bg-[#0F1621]/50 border border-white/10 focus:border-blue-500/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                  placeholder="you@example.com" 
                  type="email"
                  {...field} 
                  className="px-4 py-3 rounded-lg bg-[#0F1621]/50 border border-white/10 focus:border-blue-500/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+1 123 456 7890" 
                  {...field} 
                  className="px-4 py-3 rounded-lg bg-[#0F1621]/50 border border-white/10 focus:border-blue-500/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="px-4 py-3 rounded-lg bg-[#0F1621]/50 border border-white/10 focus:border-blue-500/50">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="social-media">Social Media Marketing</SelectItem>
                  <SelectItem value="ai-marketing">AI Marketing</SelectItem>
                  <SelectItem value="app-development">App Development</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project or inquiry..." 
                  rows={4}
                  {...field} 
                  className="px-4 py-3 rounded-lg bg-[#0F1621]/50 border border-white/10 focus:border-blue-500/50 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full px-6 py-3.5" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
