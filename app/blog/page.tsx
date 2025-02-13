"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const posts = [
  {
    slug: "modern-web-development",
    title: "Modern Web Development in 2025",
    excerpt: "Exploring the latest trends and technologies in web development",
    date: "2025-03-15",
    tags: ["Web Development", "JavaScript", "React"],
    readTime: "5 min read"
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Learn how to effectively use TypeScript in large-scale applications",
    date: "2025-03-10",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    readTime: "8 min read"
  },
  {
    slug: "nextjs-performance",
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Tips and tricks for building high-performance Next.js applications",
    date: "2025-03-05",
    tags: ["Next.js", "Performance", "Optimization"],
    readTime: "6 min read"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="space-y-2">
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{post.date}</span>
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
          </div>
        </motion.div>
      </div>
    </main>
  );
}