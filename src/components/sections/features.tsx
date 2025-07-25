"use client";

import { Brain, Zap, Shield, Globe, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms that adapt to your workflow and optimize performance automatically.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with edge computing and optimized data processing for instant results.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with industry standards to keep your data protected.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy anywhere with our distributed infrastructure and multi-region support.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time collaboration and intuitive sharing tools.",
  },
  {
    icon: Sparkles,
    title: "Smart Automation",
    description: "Automate repetitive tasks and focus on what matters most with intelligent workflows.",
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
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function Features() {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto max-w-content px-responsive">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features for Modern Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to build, deploy, and scale your AI-powered applications
            with confidence and efficiency.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-lg border bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}