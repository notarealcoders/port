"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { 
    name: "React/Next.js",
    level: 95,
    icon: "/icons/react.svg",
    color: "#61DAFB",
    category: "Frontend",
    experience: "5 years",
    projects: 30,
  },
  { 
    name: "TypeScript",
    level: 90,
    icon: "/icons/typescript.svg",
    color: "#3178C6",
    category: "Language",
    experience: "4 years",
    projects: 25,
  },
  { 
    name: "Node.js",
    level: 85,
    icon: "/icons/nodejs.svg",
    color: "#339933",
    category: "Backend",
    experience: "4 years",
    projects: 20,
  },
  { 
    name: "Python",
    level: 80,
    icon: "/icons/python.svg",
    color: "#3776AB",
    category: "Language",
    experience: "3 years",
    projects: 15,
  },
  { 
    name: "SQL/NoSQL",
    level: 85,
    icon: "/icons/database.svg",
    color: "#336791",
    category: "Database",
    experience: "4 years",
    projects: 25,
  },
  { 
    name: "DevOps",
    level: 75,
    icon: "/icons/devops.svg",
    color: "#2496ED",
    category: "Infrastructure",
    experience: "2 years",
    projects: 10,
  },
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

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

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Technical expertise and proficiency in modern web technologies
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold">{category}</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-6 md:grid-cols-2"
                >
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <TooltipProvider key={skill.name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              variants={itemVariants}
                              whileHover={{ scale: 1.02 }}
                              className="group relative p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                            >
                              <div className="flex items-center gap-4 mb-2">
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center"
                                  style={{ backgroundColor: `${skill.color}20` }}
                                >
                                  <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-6 h-6"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-medium">{skill.name}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {skill.experience} experience
                                  </p>
                                </div>
                              </div>
                              <Progress 
                                value={skill.level} 
                                className="h-2"
                                style={{ 
                                  '--progress-background': skill.color,
                                } as React.CSSProperties}
                              />
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="text-sm">
                              <p>Proficiency: {skill.level}%</p>
                              <p>{skill.projects}+ projects completed</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}