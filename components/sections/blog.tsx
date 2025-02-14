"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Modern Web Development in 2025",
    excerpt: "Exploring the latest trends and technologies in web development",
    date: "2025-03-15",
    tags: ["Web Development", "JavaScript", "React"],
    readTime: "5 min read",
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Learn how to effectively use TypeScript in large-scale applications",
    date: "2025-03-10",
    tags: ["TypeScript", "Best Practices"],
    readTime: "8 min read",
  },
  {
    title: "Optimizing Next.js Applications",
    excerpt: "Tips and tricks for building high-performance Next.js applications",
    date: "2025-03-05",
    tags: ["Next.js", "Performance"],
    readTime: "6 min read",
  },
];

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
    transition: { duration: 0.5 },
  },
};

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Posts</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Thoughts, tutorials, and insights about web development
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="h-full hover:bg-accent/50 transition-colors">
                    <CardHeader>
                      <div className="space-y-2">
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}