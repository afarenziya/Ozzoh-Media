import { useEffect, useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import PortfolioCard from '@/components/portfolio-card';
import { motion } from 'framer-motion';
import { filter } from 'lucide-react';

// Portfolio project categories
type Category = 'all' | 'web-development' | 'digital-marketing' | 'seo' | 'ai-solutions';

// Portfolio project data type
interface Project {
  id: number;
  title: string;
  categories: string[];
  image: string;
  slug: string;
}

// Portfolio projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Luxury E-commerce Platform",
    categories: ["web-development", "ui-ux"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "luxury-ecommerce"
  },
  {
    id: 2,
    title: "TechStart SEO Optimization",
    categories: ["seo", "content-marketing"],
    image: "https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "techstart-seo"
  },
  {
    id: 3,
    title: "HealthTech Mobile App",
    categories: ["app-development", "ui-ux"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "healthtech-app"
  },
  {
    id: 4,
    title: "AI-Powered Lead Generation",
    categories: ["ai-solutions", "digital-marketing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "ai-lead-generation"
  },
  {
    id: 5,
    title: "Fashion Brand Social Campaign",
    categories: ["digital-marketing", "content-marketing"],
    image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "fashion-social-campaign"
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    categories: ["web-development", "branding"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "corporate-website-redesign"
  },
  {
    id: 7,
    title: "SEO Strategy for Tech Startup",
    categories: ["seo", "digital-marketing"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "seo-tech-startup"
  },
  {
    id: 8,
    title: "AI Customer Service Chatbot",
    categories: ["ai-solutions", "web-development"],
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "ai-chatbot"
  },
  {
    id: 9,
    title: "Restaurant Online Ordering System",
    categories: ["web-development", "ui-ux"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "restaurant-ordering"
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio | Ozzoh Media';
  }, []);

  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Filter projects by category
  const filterProjects = (category: Category) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.categories.some(cat => cat.includes(category))
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      {/* Portfolio Hero */}
      <section className="pt-32 pb-20 relative bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-4">
              OUR WORK
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne mb-6">
              Our Creative <span className="text-blue-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our showcase of successful projects that demonstrate our expertise in web development and digital marketing solutions.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="FEATURED PROJECTS"
            title={<>Our Recent <span className="text-blue-500">Work</span></>}
            description="Browse through our collection of successful projects that showcase our expertise and creative solutions."
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <Button 
              className={`px-6 py-2 rounded-full ${activeCategory === 'all' ? '' : 'bg-opacity-80'}`}
              onClick={() => filterProjects('all')}
            >
              All
            </Button>
            <Button 
              variant={activeCategory === 'web-development' ? 'default' : 'outline'} 
              className="px-6 py-2 rounded-full"
              onClick={() => filterProjects('web-development')}
            >
              Web Development
            </Button>
            <Button 
              variant={activeCategory === 'digital-marketing' ? 'default' : 'outline'} 
              className="px-6 py-2 rounded-full"
              onClick={() => filterProjects('digital-marketing')}
            >
              Digital Marketing
            </Button>
            <Button 
              variant={activeCategory === 'seo' ? 'default' : 'outline'} 
              className="px-6 py-2 rounded-full"
              onClick={() => filterProjects('seo')}
            >
              SEO
            </Button>
            <Button 
              variant={activeCategory === 'ai-solutions' ? 'default' : 'outline'} 
              className="px-6 py-2 rounded-full"
              onClick={() => filterProjects('ai-solutions')}
            >
              AI Solutions
            </Button>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PortfolioCard
                  title={project.title}
                  categories={project.categories.map(cat => cat.split('-').join(' ')).map(cat => 
                    cat.charAt(0).toUpperCase() + cat.slice(1)
                  )}
                  image={project.image}
                  caseStudyUrl={`/portfolio/${project.slug}`}
                />
              </motion.div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold font-syne mb-4">No projects found</h3>
              <p className="text-gray-400">No projects match the selected category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0F1621] relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            subtitle="OUR APPROACH"
            title={<>How We Deliver <span className="text-blue-500">Results</span></>}
            description="Our proven project execution methodology ensures successful outcomes and satisfied clients."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <motion.div
              className="glass-card p-8 rounded-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold mb-6">1</div>
              <h3 className="text-xl font-bold font-syne mb-3">Discovery</h3>
              <p className="text-gray-300">We understand your business goals, target audience, and project requirements.</p>
            </motion.div>
            
            <motion.div
              className="glass-card p-8 rounded-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold mb-6">2</div>
              <h3 className="text-xl font-bold font-syne mb-3">Planning</h3>
              <p className="text-gray-300">We create a detailed project roadmap with clear milestones and deliverables.</p>
            </motion.div>
            
            <motion.div
              className="glass-card p-8 rounded-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold mb-6">3</div>
              <h3 className="text-xl font-bold font-syne mb-3">Execution</h3>
              <p className="text-gray-300">Our experts work on implementing the solution with precision and creativity.</p>
            </motion.div>
            
            <motion.div
              className="glass-card p-8 rounded-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold mb-6">4</div>
              <h3 className="text-xl font-bold font-syne mb-3">Launch & Support</h3>
              <p className="text-gray-300">We ensure a smooth launch and provide ongoing support to optimize performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="CLIENT TESTIMONIALS"
            title={<>What Our Clients <span className="text-blue-500">Say</span></>}
            description="Hear directly from our clients about their experience working with us on their projects."
          />
          
          <div className="glass-card p-8 md:p-10 rounded-xl mt-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="John Smith, CEO of TechStart" 
                  className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500/20"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <div className="text-blue-500 mb-4 flex justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 fill-blue-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic text-gray-300 mb-6">
                  "Working with Ozzoh Media transformed our online presence. Our website traffic increased by 150% and conversion rates doubled within just three months of implementing their SEO strategy."
                </p>
                <h4 className="text-xl font-bold font-syne">John Smith</h4>
                <p className="text-gray-400">CEO, TechStart</p>
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
              Ready to Start Your <span className="text-blue-500">Next Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's collaborate to create a powerful digital solution that helps your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="px-8 py-4 text-lg w-full sm:w-auto" asChild>
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg w-full sm:w-auto" asChild>
                <a href="/services">
                  View Our Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
