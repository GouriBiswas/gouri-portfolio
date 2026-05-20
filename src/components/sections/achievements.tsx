"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Code, Target, Award, Globe } from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    icon: <Globe className="h-6 w-6 text-orange-500" />,
    title: "GSSOC 2026 Contributor",
    description: "Contributor at GirlScript Summer of Code 2026",
    link: "https://gssoc.girlscript.org/profile/fd3c0d9c-a677-4289-9843-44ff038d40e4",
  },
  {
    icon: <Award className="h-6 w-6 text-yellow-500" />,
    title: "Tata Cummins Scholarship",
    description: "Awarded for 3 consecutive years based on academic excellence",
  },
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    title: "Competitive Programming",
    description: "Solved 350+ DSA problems across various coding platforms",
  },
  {
    icon: <Target className="h-6 w-6 text-green-500" />,
    title: "Problem Solving",
    description: "Strong focus on robust system design and algorithmic efficiency",
  },
];

const pors = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Student Mentor",
    description: "Mentored 200+ students in coding interviews, DSA, and competitive programming",
  },
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    title: "Member — Website Team",
    description: "Unnat Bharat Abhiyan (UBA)",
  },
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    title: "Co-Coordinator",
    description: "Website Team, ACM Student Chapter",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="w-full py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Achievements Area */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Achievements</h2>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition duration-500 blur" />
                  <Card className="border-border/50 bg-card/90 backdrop-blur-sm relative z-10 transition-colors">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="mt-1 bg-background p-2 rounded-full shadow-sm border border-border/50 group-hover:border-primary/50 group-hover:shadow-[0_0_10px_rgba(var(--primary),0.3)] transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.link ? (
                            <Link href={item.link} target="_blank" className="hover:text-primary transition-colors flex items-center gap-1">
                              {item.title} <Globe className="h-3 w-3" />
                            </Link>
                          ) : item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PORs Area */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Leadership</h2>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            <div className="space-y-4">
              {pors.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-l from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition duration-500 blur" />
                  <Card className="border-border/50 bg-card/90 backdrop-blur-sm relative z-10 transition-colors">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="mt-1 bg-background p-2 rounded-full shadow-sm border border-border/50 group-hover:border-primary/50 group-hover:shadow-[0_0_10px_rgba(var(--primary),0.3)] transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
