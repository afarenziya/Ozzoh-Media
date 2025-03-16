import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body as ContactFormData;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: 'Name, email, and message are required fields' 
        });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: 'Please provide a valid email address' 
        });
      }
      
      // In a real app, you would store this data or send an email
      // For this example, we'll just return a success message
      
      // You could also add code to store in database or send an email
      // For example: await storage.saveContactMessage({ name, email, phone, service, message });
      
      // Return success response
      return res.status(200).json({ 
        message: 'Thank you for your message. We will get back to you soon!' 
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      return res.status(500).json({ 
        message: 'There was an error processing your request. Please try again later.' 
      });
    }
  });

  // API route for newsletter subscription
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ 
          message: 'Email is required' 
        });
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: 'Please provide a valid email address' 
        });
      }
      
      // In a real app, you would save this to a database or send to an email service
      // For example: await storage.saveSubscriber({ email });
      
      return res.status(200).json({ 
        message: 'Thank you for subscribing to our newsletter!' 
      });
    } catch (error) {
      console.error('Error handling newsletter subscription:', error);
      return res.status(500).json({ 
        message: 'There was an error processing your subscription. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
