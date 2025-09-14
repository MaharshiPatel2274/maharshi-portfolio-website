import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  tags: string[];
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Optimizing VR Test Automation with Python and Unity",
    excerpt: "Deep dive into creating automated test frameworks for VR applications, reducing manual testing time by 95% through intelligent automation.",
    content: "Full article content would be rendered here with proper markdown parsing...",
    category: "VR Testing",
    readTime: "8 min read",
    date: "January 10, 2025",
    slug: "vr-test-automation-python-unity",
    tags: ["Python", "Unity", "VR", "Automation", "Testing"],
    author: "Maharshi Niraj Patel"
  },
  {
    id: "2",
    title: "Building CI/CD Pipelines for Immersive Applications",
    excerpt: "How to implement robust continuous integration and deployment workflows for VR/AR projects using GitHub Actions and Jenkins.",
    content: "Full article content would be rendered here with proper markdown parsing...",
    category: "DevOps",
    readTime: "12 min read",
    date: "December 28, 2024",
    slug: "cicd-pipelines-immersive-apps",
    tags: ["CI/CD", "GitHub Actions", "Jenkins", "VR", "DevOps"],
    author: "Maharshi Niraj Patel"
  },
  {
    id: "3",
    title: "Unity Performance Optimization for VR Applications",
    excerpt: "Essential techniques for maintaining 90+ FPS in VR experiences, from rendering optimizations to memory management best practices.",
    content: "Full article content would be rendered here with proper markdown parsing...",
    category: "Unity Development",
    readTime: "15 min read",
    date: "December 15, 2024",
    slug: "unity-vr-performance-optimization",
    tags: ["Unity", "VR", "Performance", "Optimization", "C#"],
    author: "Maharshi Niraj Patel"
  },
  {
    id: "4",
    title: "AI-Driven Automation in Software Development Workflows",
    excerpt: "Exploring how machine learning and AI can streamline development processes, from code generation to intelligent testing strategies.",
    content: "Full article content would be rendered here with proper markdown parsing...",
    category: "AI Automation",
    readTime: "10 min read",
    date: "November 30, 2024",
    slug: "ai-automation-software-workflows",
    tags: ["AI", "Automation", "Machine Learning", "Workflows", "Python"],
    author: "Maharshi Niraj Patel"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Button
                variant="ghost"
                asChild
                className="mb-8 hover:bg-transparent text-muted-foreground"
              >
                <a href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </a>
              </Button>
              
              <span className="text-primary font-medium">Technical Insights</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Blog & Case Studies
              </h1>
              <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
                In-depth technical articles covering VR testing, automation tools, AI workflows, and immersive technology development.
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 glass-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span className="text-primary font-medium">{post.category}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        
                        <Button
                          variant="ghost"
                          className="group/btn p-0 h-auto hover:bg-transparent"
                          asChild
                        >
                          <a 
                            href={`/blog/${post.slug}`}
                            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                          >
                            Read Article
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold mb-8">Explore by Category</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["VR Testing", "DevOps", "Unity Development", "AI Automation", "UX Design"].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}