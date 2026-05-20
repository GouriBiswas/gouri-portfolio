"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const experiences = [
  
  {
    role: "SDE Intern",
    company: "Hitachi India Pvt. Ltd.",
    duration: "July 2025 – Present",
    points: [
      "Developed a reusable Django RBAC library with multi-identifier authentication, 40+ REST endpoints, and hierarchical scope management, reducing integration time by 60%.",
      "Built 30+ secure backend APIs using JWT authentication and optimized token lifecycle management.",
      "Designed an Angular Authentication UI Library with 6+ reusable components, real-time validation, and 100+ documented test cases.",
      "Developed reusable Angular components including sidebar, navbar, dynamic tables, filtering, pagination, and CSV/PDF export using ag-grid.",
      "Worked on the Unified Gateway System (UGS) project, developing Tag Configuration, Historian Configuration, Operational Logs, Alarm Logs, and Telegram Logs modules with advanced filtering, searching, and date-wise handling.",
      "Implemented Saved Filter functionality, Add Asset workflow improvements, and enhanced enterprise dashboard UI/UX for industrial monitoring applications.",
      "Collaborated on frontend/backend optimization, API integration, bug fixing, testing, and deployment support using Angular, Django, SQL, and REST APIs."
    ],
    skills: ["Django", "Angular", "REST APIs", "JWT", "TypeScript", "ASP.NET"],
  },
  {
    role: "Software Engineering Intern",
    company: "Tata Motors",
    duration: "June 2025 - July 2025",
    points: [
      "Built a full-stack Blog Application from scratch with 10+ core features including authentication, blog publishing & CRUD operations",
      "Designed 15+ responsive UI components using React and Tailwind CSS",
      "Developed 20+ secure backend APIs and optimized database schemas for scalable content management",
      "Integrated JWT-based authentication, role-based access control & protected routing workflows",
      "Collaborated on debugging, API integration, testing & performance optimization across frontend and backend modules"
    ],
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "AJAX", "JWT"],
  },
  {
    role: "Software Engineering Intern",
    company: "Tata Cummins Pvt. Ltd.",
    duration: "Jun 2024 – Jul 2024",
    points: [
      "Built a VB.NET + Oracle 12c desktop application with 10+ quality control modules for engine inspection workflows",
      "Processed, validated & managed 500+ industrial records per batch with automated database operations",
      "Reduced manual errors by 90% and optimized execution time from 45 minutes to under 5 minutes",
      "Developed 15+ data validation, calculation & reporting functionalities for real-time quality assessment",
      "Integrated Oracle 12c database connectivity, automated report generation & dynamic form handling",
      "Improved operational efficiency by 80% through workflow automation, faster processing & enhanced UI usability"
    ],
    skills: ["VB.NET", "Oracle 12c", "SQL"],
  }
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full" />
          </div>

          <ScrollArea className="h-[600px] w-full rounded-md pr-4">
            <div className="space-y-8 pr-1">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="relative pl-8 md:pl-10 border-l-2 border-border/60 group"
                >
                  {/* Timeline dot with glowing effect on hover */}
                  <span className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-background border-4 border-primary group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300" />
                  
                  <Card className="border-border/50 bg-card/80 backdrop-blur-sm group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl md:text-2xl font-bold">{exp.role}</CardTitle>
                        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-full w-fit">
                          {exp.duration}
                        </span>
                      </div>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {exp.points.map((point, i) => (
                          <li key={i} className="leading-relaxed">{point}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-background/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </section>
  );
}
