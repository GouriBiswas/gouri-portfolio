"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="w-full py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full" />
          </div>

          <div className="relative">
            {/* Soft background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-purple-500/5 to-transparent blur-2xl opacity-50 z-0 rounded-3xl" />
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed flex flex-col gap-6 relative z-10 p-4 md:p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-white/5 shadow-sm hover:shadow-md transition-shadow duration-500">
             <p>
  Hi, I&apos;m <span className="text-foreground font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Gouri Biswas</span>, a Computer Engineering undergraduate passionate about building scalable full-stack applications, enterprise software, and modern web experiences. I work across technologies like Angular, React, Next.js, Django, Node.js, TypeScript, PostgreSQL, MongoDB, and SQL, with a strong focus on clean architecture, responsive UI, and performance-driven development.
</p>

<p>
  Currently, I&apos;m working as an <span className="text-foreground font-medium">SDE Intern at Hitachi India Pvt. Ltd.</span>, where I contribute to enterprise-grade applications by developing reusable Angular UI libraries, secure Django RBAC systems, JWT-based backend APIs, dynamic dashboard components, filtering systems, pagination modules, and CSV/PDF export features. My work focuses heavily on scalability, maintainability, and real-time business workflows used in production environments.
</p>

<p>
  I&apos;ve also gained industry experience through internships at Tata Technologies and Tata Cummins, where I worked on industrial automation software, Oracle-integrated VB.NET applications, and process optimization systems. Beyond development, I actively explore GenAI, modern AI-powered applications, and open-source contributions while continuously improving my problem-solving and system design skills.
</p>

<p>
  I enjoy building impactful products, solving real-world engineering challenges, and constantly learning emerging technologies that push innovation forward.
</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
