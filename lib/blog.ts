export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: Record<string, BlogPost> = {
  "modern-web-development": {
    slug: "modern-web-development",
    title: "Modern Web Development in 2025",
    excerpt: "Exploring the latest trends and technologies in web development",
    content: `
# Modern Web Development in 2025

Web development has evolved significantly over the years, and 2025 brings exciting new trends and technologies to the forefront. In this post, we'll explore the current state of web development and what it means for developers and businesses alike.

## The Rise of AI-Powered Development

Artificial Intelligence has become an integral part of modern web development. From code generation to automated testing, AI tools are helping developers work more efficiently than ever before.

## Web Assembly and the Future of Performance

Web Assembly continues to push the boundaries of what's possible in web applications, enabling near-native performance for complex computations and graphics-intensive applications.

## The Evolution of Frontend Frameworks

Frontend frameworks have matured significantly, with a focus on developer experience and performance. We're seeing a convergence of features and best practices across different frameworks.

## Conclusion

The web development landscape continues to evolve at a rapid pace, and staying updated with these changes is crucial for modern developers.
    `,
    date: "2025-03-15",
    tags: ["Web Development", "JavaScript", "React"],
    readTime: "5 min read"
  },
  "typescript-best-practices": {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Learn how to effectively use TypeScript in large-scale applications",
    content: `
# TypeScript Best Practices for Large Applications

TypeScript has become the go-to choice for large-scale JavaScript applications. Here's how to make the most of it in your projects.

## Type Safety and Developer Experience

TypeScript's type system provides excellent developer experience and catches errors before they reach production.

## Project Structure and Organization

Learn how to organize your TypeScript projects for maximum maintainability and scalability.

## Advanced TypeScript Features

Explore advanced TypeScript features that can help you write better, more maintainable code.

## Conclusion

TypeScript continues to evolve and provide better tools for building large-scale applications.
    `,
    date: "2025-03-10",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    readTime: "8 min read"
  },
  "nextjs-performance": {
    slug: "nextjs-performance",
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Tips and tricks for building high-performance Next.js applications",
    content: `
# Optimizing Next.js Applications for Performance

Performance is crucial for modern web applications. Learn how to optimize your Next.js applications for the best possible user experience.

## Image Optimization

Next.js provides excellent tools for image optimization. Learn how to use them effectively.

## Server Components and Streaming

Understand how to leverage Server Components and streaming for better performance.

## Caching Strategies

Implement effective caching strategies to improve application performance.

## Conclusion

Performance optimization is an ongoing process, and Next.js provides the tools you need to succeed.
    `,
    date: "2025-03-05",
    tags: ["Next.js", "Performance", "Optimization"],
    readTime: "6 min read"
  }
};