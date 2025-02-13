"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Resume</h1>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Senior Full Stack Developer</h3>
                    <span className="text-muted-foreground">2023 - Present</span>
                  </div>
                  <p className="text-muted-foreground">Tech Solutions Inc.</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Led development of enterprise-scale applications</li>
                    <li>Managed team of 5 developers</li>
                    <li>Implemented CI/CD pipelines</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Full Stack Developer</h3>
                    <span className="text-muted-foreground">2020 - 2023</span>
                  </div>
                  <p className="text-muted-foreground">Web Innovators Ltd.</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Developed and maintained client projects</li>
                    <li>Optimized application performance</li>
                    <li>Mentored junior developers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">B.S. in Computer Science</h3>
                    <span className="text-muted-foreground">2016 - 2020</span>
                  </div>
                  <p className="text-muted-foreground">University of Technology</p>
                  <p className="text-muted-foreground">GPA: 3.8/4.0</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-2">Programming Languages</h3>
                    <p className="text-muted-foreground">
                      JavaScript, TypeScript, Python, Java, SQL
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
                    <p className="text-muted-foreground">
                      React, Next.js, Node.js, Express, Django
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                    <p className="text-muted-foreground">
                      Git, Docker, AWS, CI/CD, Kubernetes
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Soft Skills</h3>
                    <p className="text-muted-foreground">
                      Team Leadership, Project Management, Communication
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  );
}