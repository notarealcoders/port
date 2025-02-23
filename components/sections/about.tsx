"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Download, ArrowRight } from "lucide-react";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-1000, 1000], [50, -50]);
  const rotateY = useTransform(x, [-1000, 1000], [-50, 50]);

  const springConfig = { damping: 20, stiffness: 100 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    // Calculate position relative to the center of the section
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Update the motion values
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <section
      id="about"
      className="py-24 bg-muted/50"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Passionate about creating innovative solutions and delivering
              exceptional user experiences
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] max-w-md mx-auto"
              style={{
                perspective: 8000,
                rotateX: springRotateX,
                rotateY: springRotateY,
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/profile3d.png"
                  alt="Rohit Singh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                  className="object-contain mix-blend-normal"
                  style={{ backgroundColor: "transparent" }}
                  priority
                />
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in full-stack development, I
                  specialize in building scalable web applications using modern
                  technologies. My passion lies in creating elegant solutions to
                  complex problems while ensuring the best possible user
                  experience.
                </p>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h4 className="font-bold">Experience</h4>
                    <p className="text-muted-foreground">
                      5+ years in full-stack development
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h4 className="font-bold">Projects</h4>
                    <p className="text-muted-foreground">
                      50+ successful projects delivered
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/resume">
                    View Resume
                    <BsArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline">
                  <MdOutlineFileDownload className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
