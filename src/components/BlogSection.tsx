import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Optimizing VR Test Automation with Python and Unity",
    excerpt: "Deep dive into creating automated test frameworks for VR applications, reducing manual testing time by 95% through intelligent automation.",
    category: "VR Testing",
    readTime: "8 min read",
    date: "January 10, 2025",
    slug: "vr-test-automation-python-unity",
    tags: ["Python", "Unity", "VR", "Automation", "Testing"]
  },
  {
    title: "Building CI/CD Pipelines for Immersive Applications",
    excerpt: "How to implement robust continuous integration and deployment workflows for VR/AR projects using GitHub Actions and Jenkins.",
    category: "DevOps",
    readTime: "12 min read",
    date: "December 28, 2024",
    slug: "cicd-pipelines-immersive-apps",
    tags: ["CI/CD", "GitHub Actions", "Jenkins", "VR", "DevOps"]
  },
  {
    title: "Unity Performance Optimization for VR Applications",
    excerpt: "Essential techniques for maintaining 90+ FPS in VR experiences, from rendering optimizations to memory management best practices.",
    category: "Unity Development",
    readTime: "15 min read",
    date: "December 15, 2024",
    slug: "unity-vr-performance-optimization",
    tags: ["Unity", "VR", "Performance", "Optimization", "C#"]
  },
  {
    title: "AI-Driven Automation in Software Development Workflows",
    excerpt: "Exploring how machine learning and AI can streamline development processes, from code generation to intelligent testing strategies.",
    category: "AI Automation",
    readTime: "10 min read",
    date: "November 30, 2024",
    slug: "ai-automation-software-workflows",
    tags: ["AI", "Automation", "Machine Learning", "Workflows", "Python"]
  }
];

export function BlogSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="blog" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Technical Insights</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Blog & Case Studies</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            In-depth technical articles covering VR testing, automation tools, AI workflows, and immersive technology development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 glass-card">
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
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
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
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <a href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}