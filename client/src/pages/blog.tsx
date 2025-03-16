import { useEffect, useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Calendar, Clock, User } from 'lucide-react';

// Blog post type
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug: string;
}

// Blog categories
const categories = [
  'All',
  'SEO',
  'Web Development',
  'Digital Marketing',
  'AI',
  'Social Media'
];

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 SEO Strategies to Boost Your Website Traffic in 2023",
    excerpt: "Learn effective SEO techniques that can significantly improve your website's visibility and drive more organic traffic.",
    category: "SEO",
    date: "August 15, 2023",
    readTime: "7 min read",
    author: "Ajay Kumar",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "seo-strategies-boost-traffic"
  },
  {
    id: 2,
    title: "The Future of AI in Digital Marketing: Trends to Watch",
    excerpt: "Discover how artificial intelligence is transforming the digital marketing landscape and what trends to watch for in the coming years.",
    category: "AI",
    date: "July 28, 2023",
    readTime: "5 min read",
    author: "Madhuri",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "ai-in-digital-marketing-trends"
  },
  {
    id: 3,
    title: "5 Web Design Principles That Improve User Experience",
    excerpt: "Explore essential web design principles that can significantly enhance user experience and keep visitors engaged with your website.",
    category: "Web Development",
    date: "July 10, 2023",
    readTime: "6 min read",
    author: "Nisha",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "web-design-principles-user-experience"
  },
  {
    id: 4,
    title: "Social Media Marketing: Creating Engaging Content That Converts",
    excerpt: "Learn how to create compelling social media content that not only engages your audience but also drives conversions for your business.",
    category: "Social Media",
    date: "June 22, 2023",
    readTime: "8 min read",
    author: "Ajay Kumar",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "social-media-content-that-converts"
  },
  {
    id: 5,
    title: "E-commerce SEO: Best Practices for Online Stores",
    excerpt: "Discover effective SEO strategies specifically tailored for e-commerce websites to improve visibility and drive more sales.",
    category: "SEO",
    date: "June 5, 2023",
    readTime: "9 min read",
    author: "Madhuri",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "ecommerce-seo-best-practices"
  },
  {
    id: 6,
    title: "The Role of AI in Personalizing Customer Experiences",
    excerpt: "Explore how artificial intelligence is being used to create highly personalized customer experiences that drive engagement and loyalty.",
    category: "AI",
    date: "May 18, 2023",
    readTime: "7 min read",
    author: "Nisha",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "ai-personalizing-customer-experiences"
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog | Ozzoh Media';
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  // Filter posts based on category and search query
  useEffect(() => {
    let result = blogPosts;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(result);
  }, [activeCategory, searchQuery]);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      {/* Blog Hero */}
      <section className="pt-32 pb-20 relative bg-[#0F1621]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-4">
              OUR BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne mb-6">
              Insights & <span className="text-blue-500">Resources</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our latest articles, tips, and industry insights to stay ahead in the digital world.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2 bg-[#0F1621]/50 border-white/10 focus:border-blue-500/50 rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={activeCategory === category ? 'default' : 'outline'} 
                    size="sm"
                    className="rounded-full text-sm"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center text-sm text-gray-400 mb-2 gap-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="font-syne line-clamp-2">
                        <a href={`/blog/${post.slug}`} className="hover:text-blue-500 transition-colors">
                          {post.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    
                    <CardFooter className="flex justify-between items-center pt-0">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      <Button variant="ghost" className="text-blue-500 p-0 hover:bg-transparent" asChild>
                        <a href={`/blog/${post.slug}`} className="flex items-center">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold font-syne mb-4">No articles found</h3>
              <p className="text-gray-400 mb-8">No articles match your search criteria. Try a different search or category.</p>
              <Button onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
          
          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-16">
              <Button variant="outline" className="mr-2" disabled>Previous</Button>
              <Button className="mx-1">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="ml-2">Next</Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#0F1621] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6">
              Subscribe to Our <span className="text-blue-500">Newsletter</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with our latest insights, tips, and industry news delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full sm:w-auto flex-grow bg-[#0A0A0A]/50 border-white/10 focus:border-blue-500/50 text-base py-6 px-4"
              />
              <Button size="lg" className="w-full sm:w-auto">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="FREE RESOURCES"
            title={<>Downloadable <span className="text-blue-500">Guides</span></>}
            description="Access our comprehensive guides to help you navigate the digital landscape and grow your business."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="SEO Guide" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold font-syne text-white">The Ultimate SEO Guide for 2023</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">A comprehensive guide to help you optimize your website and improve your search engine rankings.</p>
                <Button>Download Guide</Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Social Media Guide" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold font-syne text-white">Social Media Marketing Playbook</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">Learn effective strategies to grow your brand presence across different social media platforms.</p>
                <Button>Download Guide</Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="AI Marketing Guide" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold font-syne text-white">AI Marketing: A Beginner's Guide</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">Discover how to leverage AI technologies to enhance your marketing strategies and results.</p>
                <Button>Download Guide</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
