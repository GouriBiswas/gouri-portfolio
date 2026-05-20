"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Python", "JavaScript (ES6+)", "TypeScript", "HTML"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Angular", "Next.js", "CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Socket.io", "JWT"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL", "PostgreSQL", "Prisma", "Oracle"],
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Object Oriented Programming", "DBMS"],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "Postman", "Visual Studio Code", "Visual Studio"],
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground pt-4 max-w-[600px] mx-auto text-lg">
              Here are the technologies and tools I work with to build robust applications.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants} whileHover={{ y: -5 }} className="relative group h-full">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition duration-500 blur-md" />
                
                <Card className="h-full border-border/50 bg-card/80 backdrop-blur-md relative z-10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground/90">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div key={skill} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Badge variant="secondary" className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default shadow-sm border border-border/50">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
