"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Accessing Env Vars - ensure they are prefixed with NEXT_PUBLIC_ for client access
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your .env.local file and restart the server.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Gouri",
        },
        publicKey
      );

      toast.success("Email sent successfully!", {
        description: "Thank you for reaching out, I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      
      // Detailed error message for the user based on response
      const errorMessage = error?.text || error?.message || "Failed to send email";
      
      toast.error("Contact Form Error", {
        description: `Message: ${errorMessage}. Ensure your .env.local keys are correct and you have restarted the server.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12 text-center md:text-left"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full" />
            <p className="text-muted-foreground pt-4 max-w-[600px] text-lg mx-auto md:mx-0">
              I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="flex flex-col space-y-8">
              <motion.div whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href="mailto:gouribiswas011@gmail.com"}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    gouribiswas011@gmail.com
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 5, scale: 1.02 }} className="flex items-center gap-4 group cursor-pointer">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">Jamshedpur/Nagpur, India</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form with 3D Float container */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-50 blur-xl transition duration-700" />
              <Card className="border-border/50 bg-card/90 backdrop-blur-xl shadow-lg relative z-10 transition-all duration-500 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>Fill out the form below to reach out directly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input id="name" placeholder="John Doe" className="bg-background/50" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Hi Gouri, I'd like to discuss an opportunity..." 
                        className="min-h-[120px] bg-background/50" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
