import { useEffect } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/service-card';
import { motion } from 'framer-motion';
import { Code, Megaphone, Search, Bot, Share2, Globe, Mail, MonitorSmartphone, Check, ArrowRight } from 'lucide-react';

const servicesList = [
  {
    icon: <Code className="text-white text-2xl" />,
    title: "Web Development",
    description: "Custom websites optimized for performance, responsiveness, and user experience.",
  },
  {
    icon: <Megaphone className="text-white text-2xl" />,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns to boost your online visibility and conversions.",
  },
  {
    icon: <Search className="text-white text-2xl" />,
    title: "SEO",
    description: "Advanced SEO strategies to improve rankings and organic traffic to your website.",
  },
  {
    icon: <Bot className="text-white text-2xl" />,
    title: "AI Marketing",
    description: "Leverage AI-powered tools to create personalized marketing experiences.",
  },
  {
    icon: <Share2 className="text-white text-2xl" />,
    title: "Social Media Marketing",
    description: "Engage with your audience and build brand awareness through social platforms.",
  },
  {
    icon: <Globe className="text-white text-2xl" />,
    title: "PPC",
    description: "Targeted pay-per-click campaigns to drive immediate, qualified traffic to your site.",
  },
  {
    icon: <Mail className="text-white text-2xl" />,
    title: "Email Marketing",
    description: "High-converting email campaigns that nurture leads and boost customer loyalty.",
  },
  {
    icon: <MonitorSmartphone className="text-white text-2xl" />,
    title: "App Development",
    description: "Custom mobile applications designed for seamless user experience and functionality.",
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Ozzoh Media';
  }, []);

  return (
    <>
      {/* Services Hero */}
      <section className="pt-32 pb-20 relative bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-4">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne mb-6">
              Digital Solutions for <span className="text-blue-500">Every Need</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our comprehensive range of digital services designed to help your business thrive in the online landscape.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Get a Free Consultation</a>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="WHAT WE OFFER"
            title={<>Comprehensive Digital <span className="text-blue-500">Services</span></>}
            description="We provide end-to-end digital solutions tailored to meet your specific business goals and challenges."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="OUR PROCESS"
            title={<>How We <span className="text-blue-500">Work</span></>}
            description="We follow a proven methodology to ensure successful delivery of every project."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-black/25 backdrop-blur-md border border-white/5 rounded-xl p-6 relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">Discovery</h3>
              <p className="text-gray-300">We learn about your business, goals, and challenges to create a tailored strategy.</p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="text-blue-500 h-8 w-8" />
              </div>
            </div>
            
            <div className="bg-black/25 backdrop-blur-md border border-white/5 rounded-xl p-6 relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">Strategy</h3>
              <p className="text-gray-300">We develop a comprehensive plan with clear milestones and deliverables.</p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="text-blue-500 h-8 w-8" />
              </div>
            </div>
            
            <div className="bg-black/25 backdrop-blur-md border border-white/5 rounded-xl p-6 relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">Execution</h3>
              <p className="text-gray-300">Our expert team implements the strategy with precision and attention to detail.</p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="text-blue-500 h-8 w-8" />
              </div>
            </div>
            
            <div className="bg-black/25 backdrop-blur-md border border-white/5 rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">Growth</h3>
              <p className="text-gray-300">We monitor, optimize, and scale to ensure long-term success and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-8 md:p-12 overflow-hidden relative border border-white/5 bg-black/25 backdrop-blur-md">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-[#0F1621] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-6">
              Ready to Transform Your <span className="text-blue-500">Digital Presence?</span>
            </h2>
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
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
