import { useEffect } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import TeamCard from '@/components/team-card';
import { motion } from 'framer-motion';
import { Lightbulb, Gem, Clock, Headset, Check, ArrowRight } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Ozzoh Media';
  }, []);

  return (
    <>
      {/* About Hero */}
      <section className="pt-32 pb-20 relative bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-4">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne mb-6">
              The Digital Growth <span className="text-blue-500">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              With 6+ years of industry experience, we've helped businesses of all sizes achieve their digital goals with our expertly crafted strategies.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2017 by Ajay Kumar, Ozzoh Media began as a small digital marketing consultancy with a vision to help local businesses establish their online presence. Over the years, we've evolved into a full-service digital agency serving clients across multiple industries worldwide.
              </p>
              <p className="text-gray-300 mb-4">
                Our journey has been defined by continuous innovation, adaptability, and a relentless focus on delivering measurable results for our clients. We've embraced emerging technologies and trends while staying true to our core values of integrity, quality, and client satisfaction.
              </p>
              <p className="text-gray-300">
                Today, Ozzoh Media is recognized as a trusted partner for businesses seeking comprehensive digital solutions that drive growth and create meaningful connections with their audience.
              </p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent absolute -z-10 blur-2xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Ozzoh Media Journey" 
                className="w-full rounded-xl shadow-lg border border-white/10" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="OUR FOUNDATION"
            title={<>Mission, Vision & <span className="text-blue-500">Values</span></>}
            description="The core principles that guide everything we do at Ozzoh Media."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-black/25 backdrop-blur-md border border-white/5 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-syne mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with innovative digital solutions that drive growth, enhance visibility, and create meaningful connections with their audience.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-black/25 backdrop-blur-md border border-white/5 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-syne mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading digital agency known for creating transformative digital experiences that help businesses thrive in an ever-evolving digital landscape.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-black/25 backdrop-blur-md border border-white/5 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-syne mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-blue-500 mt-1 mr-2 h-4 w-4" />
                  <span>Innovation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mt-1 mr-2 h-4 w-4" />
                  <span>Integrity</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mt-1 mr-2 h-4 w-4" />
                  <span>Excellence</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mt-1 mr-2 h-4 w-4" />
                  <span>Collaboration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mt-1 mr-2 h-4 w-4" />
                  <span>Client-centricity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            subtitle="WHY CHOOSE US"
            title={<>What Sets Us <span className="text-blue-500">Apart</span></>}
            description="Discover the key differentiators that make Ozzoh Media the preferred choice for digital solutions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 mb-4">
                <Lightbulb className="text-blue-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-syne mb-2">Innovation</h3>
              <p className="text-gray-300">
                We constantly explore new technologies and approaches to keep our clients ahead of the curve.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 mb-4">
                <Gem className="text-blue-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-syne mb-2">Quality</h3>
              <p className="text-gray-300">
                We never compromise on quality, delivering excellence in every aspect of our work.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 mb-4">
                <Clock className="text-blue-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-syne mb-2">Timeliness</h3>
              <p className="text-gray-300">
                We respect deadlines and deliver projects on time without compromising on quality.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 mb-4">
                <Headset className="text-blue-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-syne mb-2">24/7 Support</h3>
              <p className="text-gray-300">
                Our dedicated support team is available round the clock to address any concerns or queries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="OUR TEAM"
            title={<>Meet the <span className="text-blue-500">Experts</span></>}
            description="The talented professionals behind Ozzoh Media's success, bringing diverse skills and expertise to every project."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
      </section>

      {/* Achievements */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="OUR ACHIEVEMENTS"
            title={<>Milestones & <span className="text-blue-500">Recognition</span></>}
            description="A look at our journey and the achievements that mark our success story."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <motion.div 
              className="text-center p-6 bg-black/25 backdrop-blur-md border border-white/5 rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-blue-500 mb-2">100+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-black/25 backdrop-blur-md border border-white/5 rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-blue-500 mb-2">50+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-black/25 backdrop-blur-md border border-white/5 rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-blue-500 mb-2">15+</h3>
              <p className="text-gray-300">Industry Awards</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-black/25 backdrop-blur-md border border-white/5 rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-blue-500 mb-2">6+</h3>
              <p className="text-gray-300">Years of Excellence</p>
            </motion.div>
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
              Ready to Work <span className="text-blue-500">With Us?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's collaborate to create a powerful online strategy that helps your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="px-8 py-4 text-lg w-full sm:w-auto" asChild>
                <a href="#contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
