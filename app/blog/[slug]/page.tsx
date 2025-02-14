import { blogPosts } from '@/lib/blog';
import { BlogPostDetails } from './blog-post-details';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return <BlogPostDetails post={post} />;
}