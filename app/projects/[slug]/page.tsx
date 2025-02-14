"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";

const projects = {
  "e-commerce-platform": {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    longDescription: `
      A comprehensive e-commerce platform built with modern web technologies.
      Features include real-time inventory tracking, secure payment processing,
      and an intuitive admin dashboard.
    `,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    features: [
      "Real-time inventory management",
      "Secure payment processing",
      "Admin dashboard",
      "Order tracking",
      "Product analytics"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    images: [
      "/project1-1.jpg",
      "/project1-2.jpg",
      "/project1-3.jpg"
    ]
  },
  "task-management": {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    longDescription: `
      A modern task management application designed for team collaboration.
      Features include real-time updates, task assignments, and progress tracking.
    `,
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time collaboration",
      "Task assignments",
      "Progress tracking",
      "Team chat",
      "File sharing"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    images: [
      "/project2-1.jpg",
      "/project2-2.jpg"
    ]
  },
  "analytics-dashboard": {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization",
    longDescription: `
      A comprehensive analytics dashboard providing real-time insights.
      Features include interactive charts, custom reports, and data export.
    `,
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    features: [
      "Interactive charts",
      "Custom reports",
      "Data export",
      "Real-time updates",
      "User permissions"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    images: [
      "/project3-1.jpg",
      "/project3-2.jpg"
    ]
  }
};

// Required for static site generation with output: 'export'
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <Link href="/#projects">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                View Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}