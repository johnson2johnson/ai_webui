"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "Basic AI features",
      "Community support",
      "1GB storage",
    ],
    cta: "Get Started",
    href: "/app/signup",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced AI features",
      "Priority support",
      "50GB storage",
      "Team collaboration",
      "API access",
    ],
    cta: "Start Free Trial",
    href: "/app/signup?plan=pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated support",
      "Unlimited storage",
      "Advanced security",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-content px-responsive">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-lg border bg-background ${
                plan.popular
                  ? "border-accent shadow-lg scale-105 bg-accent/5"
                  : "hover:border-accent/50 transition-colors"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}