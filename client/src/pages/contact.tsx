import { useEffect } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/contact-form';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Ozzoh Media';
  }, []);

  return (
    <>
      {/* Contact Hero */}
      <section className="pt-32 pb-20 relative bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-4">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne mb-6">
              Get In <span className="text-blue-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind? Let's discuss how we can help elevate your digital presence and drive meaningful results.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold font-syne mb-6">Send Us a Message</h3>
                <ContactForm />
              </Card>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold font-syne mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <MapPin className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p className="text-gray-300">85 SD-II, Greater Noida West<br/>Gautam Buddha Nagar, UP, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <Mail className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:info@ozzohmedia.com" className="text-gray-300 hover:text-blue-500 transition-colors">
                        info@ozzohmedia.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <Phone className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-gray-300">
                        +91 9315869313<br/>+91 9999491146
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <MessageCircle className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">WhatsApp</h4>
                      <a 
                        href="https://wa.me/919315869313" 
                        className="text-gray-300 hover:text-blue-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 9315869313
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
              
              {/* Map */}
              <Card className="p-6 h-96 relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0162927153236!2d77.4395!3d28.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzMwLjAiTiA3N8KwMjYnMjIuMiJF!5e0!3m2!1sen!2sin!4v1623825273691!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                  title="Ozzoh Media Office Location"
                ></iframe>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="FAQ"
            title={<>Frequently Asked <span className="text-blue-500">Questions</span></>}
            description="Find answers to common questions about our services and processes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold font-syne mb-4">What services does Ozzoh Media offer?</h4>
              <p className="text-gray-300">
                Ozzoh Media offers a comprehensive range of digital services including web development, digital marketing, SEO optimization, social media marketing, AI marketing solutions, PPC management, email marketing, and app development.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold font-syne mb-4">How long does it take to complete a project?</h4>
              <p className="text-gray-300">
                Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months or more. We provide detailed timelines during the project planning phase.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold font-syne mb-4">What is your pricing structure?</h4>
              <p className="text-gray-300">
                We offer customized pricing based on project requirements. We provide detailed proposals with transparent pricing before starting any project. We also offer flexible payment options to accommodate different budget needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold font-syne mb-4">Do you provide ongoing support after project completion?</h4>
              <p className="text-gray-300">
                Yes, we offer comprehensive post-project support and maintenance packages. Our team is available 24/7 to address any issues or questions that may arise after your project is launched.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold font-syne mb-4">How do you measure the success of digital marketing campaigns?</h4>
              <p className="text-gray-300">
                We use a variety of metrics including website traffic, conversion rates, engagement, ROI, and other KPIs specific to your business goals. We provide regular detailed reports to track progress and make data-driven optimizations.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold font-syne mb-4">Can you work with clients internationally?</h4>
              <p className="text-gray-300">
                Absolutely! We work with clients globally and have experience managing projects across different time zones. Our digital collaboration tools ensure smooth communication regardless of geographical location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="OUR CLIENTS"
            title={<>Trusted by Leading <span className="text-blue-500">Businesses</span></>}
            description="We've had the privilege of working with a diverse range of clients across various industries."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                className="bg-[#0F1621]/50 border border-white/5 rounded-lg p-6 flex items-center justify-center h-24"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <svg 
                  className="w-full h-10 text-gray-400" 
                  viewBox="0 0 100 40" 
                  fill="currentColor"
                >
                  <rect width="100" height="40" fillOpacity="0" />
                  <text x="50" y="25" fontFamily="Arial" fontSize="12" textAnchor="middle">
                    Client Logo {item}
                  </text>
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
