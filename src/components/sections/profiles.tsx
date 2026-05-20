"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Code2, Terminal } from "lucide-react";
import Link from "next/link";

const profiles = [
  {
    name: "GitHub",
    icon: <Github className="h-8 w-8 mb-4 text-foreground group-hover:text-primary transition-colors" />,
    url: "https://github.com/GouriBiswas",
    color: "hover:border-primary/50",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-8 w-8 mb-4 text-[#0A66C2] group-hover:text-[#0A66C2]/80 transition-colors" />,
    url: "https://www.linkedin.com/in/gouri-biswas-5b0503298/",
    color: "hover:border-[#0A66C2]/50",
  },
  {
    name: "LeetCode",
    icon: <Code2 className="h-8 w-8 mb-4 text-[#FFA116] group-hover:text-[#FFA116]/80 transition-colors" />,
    url: "https://leetcode.com/u/Gouri_Biswas/", // Add LeetCode URL here
    color: "hover:border-[#FFA116]/50",
  },
  {
    name: "GeeksforGeeks",
    icon: <Terminal className="h-8 w-8 mb-4 text-[#2F8D46] group-hover:text-[#2F8D46]/80 transition-colors" />,
    url: "https://www.geeksforgeeks.org/profile/gouribis019w", // Add GFG URL here
    color: "hover:border-[#2F8D46]/50",
  },
];

export function Profiles() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container px-4 md:px-8 mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Coding Profiles</h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground pt-4 max-w-[600px] mx-auto text-lg">
              Find me across the web where I build projects, connect, and practice algorithms.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                {/* 3D Glow Effect */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition duration-500 blur-md" />
                
                <Link href={profile.url} target="_blank" rel="noreferrer" className="block h-full relative z-10">
                  <Card className={`h-full flex flex-col items-center justify-center p-8 text-center transition-all duration-300 border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-2xl shadow-sm ${profile.color}`}>
                    <CardContent className="p-0 flex flex-col items-center">
                      <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }}>
                        {profile.icon}
                      </motion.div>
                      <span className="font-medium text-foreground">{profile.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
