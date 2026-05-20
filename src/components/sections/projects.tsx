"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Socially Application",
    description: "A full-stack social platform featuring secure authentication, file uploads, and optimized database queries to support active users seamlessly.",
    points: [
  "Optimized database queries and routing, improving response time by 30–40% and supporting 40+ concurrent active users.",
  "Implemented secure authentication and media uploads using Clerk and UploadThing, ensuring 100% protected routes and user data handling.",
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    github: "https://github.com/GouriBiswas", 
    demo: "https://socially-app-kappa.vercel.app/", // Using GitHub as placeholder if live demo not provided
  },
  {
    title: "Realtime Chat Application",
    description: "A real-time messaging platform enabling low-latency communication with instant message delivery and efficient state management.",
    points: [
      "Achieved sub-second message delivery latency using WebSockets and improved state efficiency by 25% through optimized Zustand state management.",
      "Designed scalable backend APIs and handled multiple concurrent users with efficient event-driven architecture",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Zustand"],
    github: "https://github.com/GouriBiswas",
    demo: "https://fullstack-chat-app-ht3k.onrender.com/login",
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground pt-4 max-w-[600px] mx-auto text-lg">
              Here are some of my recent applications that showcase my full-stack capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full relative"
              >
                {/* 3D Glow Backdrop */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-primary/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-30 blur-xl transition duration-700" />
                
                <Card className="flex flex-col h-full overflow-hidden border-border/50 bg-card/90 backdrop-blur-xl relative z-10 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Decorative project header/image area */}
                  <div className="w-full h-48 bg-muted relative overflow-hidden flex items-center justify-center border-b">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-transparent dark:from-primary/20 dark:to-transparent z-0 group-hover:scale-110 transition-transform duration-700" />
                    <h3 className="text-2xl font-bold text-muted-foreground/40 z-10 tracking-widest uppercase">{project.title.split(" ")[0]}</h3>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-4 pt-4 border-t border-border/40 mt-auto">
                    <Button variant="default" size="sm" className="w-full sm:w-auto" onClick={() => window.open(project.github, '_blank')}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => window.open(project.demo, '_blank')}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Button 
              size="lg" 
              variant="outline" 
              className="group rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open('https://github.com/GouriBiswas', '_blank')}
            >
              View More Projects 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
