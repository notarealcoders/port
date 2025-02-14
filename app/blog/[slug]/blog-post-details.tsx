'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { type BlogPost } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';

interface BlogPostDetailsProps {
  post: BlogPost;
}

export function BlogPostDetails({ post }: BlogPostDetailsProps) {
  return (
    <main className="min-h-screen py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </main>
  );
}