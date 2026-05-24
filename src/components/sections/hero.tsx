"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const resumeLink = "https://drive.google.com/file/d/1P_Jny_-2l8-ikVk2ESMFXJc-idl_4W9J/view?usp=sharing"; // Placeholder for provided GDrive link

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 md:py-24 lg:py-32 bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 top-0 z-0 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,60,198,0.15),rgba(0,0,0,0))]" />
      
      <div className="container px-4 md:px-8 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start space-y-8 flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm md:text-base text-blue-600 dark:text-blue-400">Software Development Engineer</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Gouri Biswas</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Focus on scalability, backend + full-stack strength.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="h-12 px-8 rounded-full font-medium transition-transform hover:scale-105" onClick={() => window.open(resumeLink, '_blank')}>
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full font-medium transition-transform hover:scale-105" onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" className="h-12 px-8 rounded-full font-medium transition-transform hover:scale-105" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Simplified Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 flex justify-center lg:justify-end w-full relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Clean shadow treatment instead of large circles */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-blue-500/10 to-transparent blur-2xl z-0" />
            
            {/* Minimal border/container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-border/50 shadow-2xl group flex items-center justify-center bg-card">
              <img
                src="/images/profile_GouriBiswas.jpeg"
                alt="Gouri Biswas"
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute z-20 text-center text-muted-foreground font-medium p-4">
                Profile Image <br/>
                <span className="text-xs">Save your image as 'profile_GouriBiswas.jpeg' in public/images/</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
