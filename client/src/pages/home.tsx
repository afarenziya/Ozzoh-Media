import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Check, ChevronDown, Code, Megaphone, Search, Bot, MapPin, Mail, Phone, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import ParticlesBackground from '@/components/particles-background';
import ServiceCard from '@/components/service-card';
import TeamCard from '@/components/team-card';
import TestimonialCard from '@/components/testimonial-card';
import PortfolioCard from '@/components/portfolio-card';
import ContactForm from '@/components/contact-form';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  useEffect(() => {
    document.title = 'Ozzoh Media | Digital Marketing & Web Development Agency';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <ParticlesBackground />
        
        <div className="container mx-auto px-4 pt-16 pb-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Hero Content */}
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne mb-6 leading-tight">
                Transforming Ideas into 
                <span className="text-blue-500"> Digital Reality</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Elevate your online presence with our expert digital marketing and web development services. 
                With 6+ years of industry experience, we deliver custom solutions that drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild className="px-8 py-3.5 w-full sm:w-auto">
                  <a href="#contact">
                    Get Started
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="px-8 py-3.5 w-full sm:w-auto">
                  <a href="#services">
                    Explore Services
                  </a>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">6+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">100+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">50+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">24/7</h3>
                  <p className="text-gray-400">Support</p>
                </div>
              </div>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div 
              className="lg:w-1/2 flex justify-center lg:justify-end relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-radial from-blue-500/30 to-transparent absolute -z-10 blur-2xl rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
                  alt="Digital Marketing Illustration" 
                  className="w-full max-w-lg rounded-2xl border border-white/10 shadow-xl" 
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -bottom-6 -left-10 p-3 bg-black/25 backdrop-blur-md rounded-lg border border-white/5"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="text-blue-500" />
                    <span className="font-medium">Traffic +145%</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-6 -right-6 p-3 bg-black/25 backdrop-blur-md rounded-lg border border-white/5"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <Code className="text-blue-500" />
                    <span className="font-medium">Web Dev Expert</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <motion.div 
            className="animate-bounce"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="text-blue-500 text-2xl opacity-70" />
          </motion.div>
          <p className="text-sm text-gray-400 mt-2">Scroll Down</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0F1621] relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="OUR SERVICES"
            title={<>Digital Solutions That Drive <span className="text-blue-500">Growth</span></>}
            description="We provide comprehensive digital services to help your business thrive in the online landscape with cutting-edge strategies and technologies."
          />
          
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Code className="text-white text-2xl" />}
              title="Web Development"
              description="Custom websites optimized for performance, responsiveness, and user experience."
            />
            
            <ServiceCard
              icon={<Megaphone className="text-white text-2xl" />}
              title="Digital Marketing"
              description="Strategic marketing campaigns to boost your online visibility and conversions."
            />
            
            <ServiceCard
              icon={<Search className="text-white text-2xl" />}
              title="SEO"
              description="Advanced SEO strategies to improve rankings and organic traffic to your website."
            />
            
            <ServiceCard
              icon={<Bot className="text-white text-2xl" />}
              title="AI Marketing"
              description="Leverage AI-powered tools to create personalized marketing experiences."
            />
          </div>
          
          {/* More Services */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <a href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Featured Service */}
          <div className="mt-24 rounded-2xl p-8 md:p-12 overflow-hidden relative border border-white/5 bg-black/25 backdrop-blur-md">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-12 relative">
              <div className="md:w-1/2">
                <span className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-4">FEATURED SERVICE</span>
                <h3 className="text-2xl md:text-3xl font-bold font-syne mb-4">AI-Powered Marketing Solutions</h3>
                <p className="text-gray-300 mb-6">Leverage the power of artificial intelligence to create highly personalized marketing campaigns that resonate with your target audience and drive measurable results.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-blue-500 mt-1 mr-3 h-5 w-5" />
                    <span>Personalized content generation based on user behavior</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-500 mt-1 mr-3 h-5 w-5" />
                    <span>Predictive analytics for campaign optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-500 mt-1 mr-3 h-5 w-5" />
                    <span>Automated A/B testing and performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-500 mt-1 mr-3 h-5 w-5" />
                    <span>Customer journey mapping with AI insights</span>
                  </li>
                </ul>
                
                <Button asChild>
                  <a href="#contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="AI Marketing" 
                  className="w-full rounded-xl shadow-lg border border-white/10" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0A0A0A] relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="ABOUT US"
            title={<>The Digital Growth <span className="text-blue-500">Partners</span></>}
            description="With 6+ years of industry experience, we've helped businesses of all sizes achieve their digital goals with our expertly crafted strategies."
          />
          
          {/* About Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold font-syne mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6">To empower businesses with innovative digital solutions that drive growth, enhance visibility, and create meaningful connections with their audience.</p>
                
                <h3 className="text-2xl font-bold font-syne mb-4 mt-8">Our Vision</h3>
                <p className="text-gray-300 mb-6">To be the leading digital agency known for creating transformative digital experiences that help businesses thrive in an ever-evolving digital landscape.</p>
                
                <h3 className="text-2xl font-bold font-syne mb-4 mt-8">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <ArrowRight className="text-blue-500 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Innovation</h4>
                      <p className="text-gray-400 text-sm">Constantly exploring new technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <ArrowRight className="text-blue-500 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Quality</h4>
                      <p className="text-gray-400 text-sm">Delivering excellence in every project</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <ArrowRight className="text-blue-500 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Timeliness</h4>
                      <p className="text-gray-400 text-sm">Meeting deadlines with precision</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
                      <ArrowRight className="text-blue-500 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">24/7 Support</h4>
                      <p className="text-gray-400 text-sm">Always available when you need us</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent absolute -z-10 blur-2xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Ozzoh Media Team" 
                className="w-full rounded-xl shadow-lg border border-white/10" 
              />
            </motion.div>
          </div>
          
          {/* Team Section */}
          <div>
            <h3 className="text-2xl font-bold font-syne mb-8 text-center">Meet Our Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamCard
                name="Ajay Farenziya"
                role="Founder & CEO"
                description="Digital marketing expert with 6+ years of experience leading successful campaigns."
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                linkedinUrl="#"
                twitterUrl="#"
                emailUrl="info@ozzohmedia.com"
              />
              
              <TeamCard
                name="Madhuri"
                role="Co-Founder"
                description="Creative strategist specializing in brand development and client relations."
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                linkedinUrl="#"
                twitterUrl="#"
                emailUrl="madhuri@ozzohmedia.com"
              />
              
              <TeamCard
                name="Nisha"
                role="CFO"
                description="Financial expert ensuring optimal resource allocation and business growth."
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                linkedinUrl="#"
                twitterUrl="#"
                emailUrl="nisha@ozzohmedia.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-[#0F1621] to-[#0A0A0A] relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="TESTIMONIALS"
            title={<>What Our <span className="text-blue-500">Clients Say</span></>}
            description="Don't just take our word for it. Here's what our clients have to say about their experience working with Ozzoh Media."
          />
          
          {/* Testimonial Slider */}
          <div className="relative px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Working with Ozzoh Media transformed our online presence. Our website traffic increased by 150% and conversion rates doubled within just three months of implementing their SEO strategy."
                name="John Smith"
                position="CEO"
                company="TechStart"
                rating={5}
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
              />
              
              <TestimonialCard
                quote="The team at Ozzoh Media designed a stunning website that perfectly captures our brand identity. Their attention to detail and creative approach exceeded our expectations."
                name="Sarah Johnson"
                position="Marketing Director"
                company="Bloom Fashion"
                rating={5}
                image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
              />
              
              <TestimonialCard
                quote="The AI marketing solutions provided by Ozzoh Media revolutionized how we connect with customers. The personalized campaigns have increased engagement by 200% and significantly boosted our ROI."
                name="Michael Chen"
                position="Founder"
                company="GrowthX"
                rating={4.5}
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
              />
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-500/70 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-500/70 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="OUR WORK"
            title={<>Featured <span className="text-blue-500">Projects</span></>}
            description="Explore our portfolio of successful projects that showcase our expertise in web development and digital marketing."
          />
          
          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <Button className="px-6 py-2 rounded-full">All</Button>
            <Button variant="outline" className="px-6 py-2 rounded-full">Web Development</Button>
            <Button variant="outline" className="px-6 py-2 rounded-full">Digital Marketing</Button>
            <Button variant="outline" className="px-6 py-2 rounded-full">SEO</Button>
            <Button variant="outline" className="px-6 py-2 rounded-full">AI Solutions</Button>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              title="Luxury E-commerce Platform"
              categories={["Web Development", "UI/UX Design"]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
            />
            
            <PortfolioCard
              title="TechStart SEO Optimization"
              categories={["SEO", "Content Marketing"]}
              image="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
            />
            
            <PortfolioCard
              title="HealthTech Mobile App"
              categories={["App Development", "UX Design"]}
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
            />
            
            <PortfolioCard
              title="AI-Powered Lead Generation"
              categories={["AI Solutions", "Digital Marketing"]}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
            />
            
            <PortfolioCard
              title="Fashion Brand Social Campaign"
              categories={["Social Media Marketing", "Content Creation"]}
              image="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
            />
            
            <PortfolioCard
              title="Corporate Website Redesign"
              categories={["Web Development", "Branding"]}
              image="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
            />
          </div>
          
          {/* View More Button */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <a href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-[#0F1621] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your <span className="text-blue-500">Digital Presence?</span>
            </motion.h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's collaborate to create a powerful online strategy that helps your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="px-8 py-4 text-lg w-full sm:w-auto" asChild>
                <a href="#contact">
                  Start Your Project
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg w-full sm:w-auto" asChild>
                <a href="#services">
                  View Our Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="CONTACT US"
            title={<>Get In <span className="text-blue-500">Touch</span></>}
            description="Have a project in mind? Let's discuss how we can help elevate your digital presence and drive meaningful results."
          />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <Card className="p-8">
                <h3 className="text-2xl font-bold font-syne mb-6">Send Us a Message</h3>
                <ContactForm />
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/2">
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
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors">
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1621]/50 border border-white/10 hover:border-blue-500/50 hover:text-blue-500 transition-colors">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
