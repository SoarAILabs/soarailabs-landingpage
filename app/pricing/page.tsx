import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  ArrowRight,
  Zap,
  Users,
  Shield,
  Sparkles,
  Code,
  Server,
  HelpCircle,
} from "lucide-react";

// Pricing data structure
type PricingTier = {
  name: string;
  price: string;
  description: string;
  badge?: string;
  features: string[];
  apiLimit: string;
  cta: string;
  ctaVariant: "default" | "outline";
  popular?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Access to ALL models (Breeze & Gust)",
      "1,000 API requests/month",
      "Basic Kite features",
      "Community support",
      "Self-hosted option available",
    ],
    apiLimit: "1,000/month",
    cta: "Get Started",
    ctaVariant: "outline",
  },
  {
    name: "Pro",
    price: "$20",
    description: "For individual developers",
    badge: "Popular",
    popular: true,
    features: [
      "Everything in Free",
      "Access to ALL models (Breeze & Gust)",
      "50,000 API requests/month",
      "Advanced Kite features",
      "Priority support",
      "Add-on credits available",
    ],
    apiLimit: "50,000/month",
    cta: "Get Pro",
    ctaVariant: "default",
  },
  {
    name: "Teams",
    price: "$40",
    description: "For growing teams",
    features: [
      "Everything in Pro",
      "Access to ALL models (Breeze & Gust)",
      "50,000 API requests/user/month",
      "Centralized billing",
      "Admin dashboard with usage analytics",
      "SSO (optional add-on)",
      "Team collaboration features",
    ],
    apiLimit: "50,000/user/month",
    cta: "Get Teams",
    ctaVariant: "outline",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations",
    features: [
      "Everything in Teams",
      "Access to ALL models (Breeze & Gust)",
      "Unlimited usage or very high limits",
      "Custom fine-tuning services",
      "Dedicated support",
      "SLA guarantees",
      "Custom deployment options",
    ],
    apiLimit: "Unlimited",
    cta: "Contact us",
    ctaVariant: "outline",
  },
];

const faqs = [
  {
    question: "Do I get access to all models on every tier?",
    answer:
      "Yes! As an open-source company, we believe everyone should have access to all our models (Breeze & Gust) regardless of tier. Pricing is based on usage volume, features, and support level - not model access.",
  },
  {
    question: "What happens if I exceed my API limit?",
    answer:
      "Pro and Teams users can purchase add-on credits to extend their usage. Free tier users will need to upgrade to continue using the service after reaching their monthly limit.",
  },
  {
    question: "Can I self-host the models?",
    answer:
      "Yes! All tiers include access to self-hosted options. Our models are open-source, so you can deploy them on your own infrastructure if you prefer.",
  },
  {
    question: "What's the difference between Pro and Teams?",
    answer:
      "Pro is designed for individual developers with a single user account. Teams adds per-user credits, centralized billing, admin dashboards, team collaboration features, and optional SSO for organizations.",
  },
  {
    question: "Do you offer annual plans?",
    answer:
      "Currently, we offer monthly billing. Annual plans may be available for Enterprise customers - please contact us to discuss options.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full relative -mt-20 pt-20">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            All models available on every tier. Pricing based on usage,
            features, and support.
          </p>
          <Badge
            variant="secondary"
            className="rounded-none clean-border px-4 py-1.5"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Open-source philosophy - no model restrictions
          </Badge>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative pricing-grid">
          {/* Glow positioned at grid level to be below all cards - Medium screens */}
          <div
            className="absolute z-0 glow-base transition-all duration-500 ease-out glow-hover hidden md:block lg:hidden"
            data-pro-glow
            style={{
              left: "calc((100% - 1.5rem) / 2 + 1.5rem - 1.5rem)",
              top: "-1.5rem",
              width: "calc((100% - 1.5rem) / 2 + 3rem)",
              height: "calc(100% + 3rem)",
              background: "transparent",
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(138, 191, 255, 0.7) 0%, rgba(138, 191, 255, 0.6) 15%, rgba(138, 191, 255, 0.45) 30%, rgba(138, 191, 255, 0.35) 45%, rgba(138, 191, 255, 0.25) 58%, rgba(138, 191, 255, 0.15) 70%, rgba(138, 191, 255, 0.08) 82%, transparent 92%)
              `,
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 50%, rgba(0,0,0,0.95) 62%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.2) 90%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 50%, rgba(0,0,0,0.95) 62%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.2) 90%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
          {/* Glow positioned at grid level to be below all cards - Large screens */}
          <div
            className="absolute z-0 glow-base transition-all duration-500 ease-out glow-hover hidden lg:block"
            data-pro-glow
            style={{
              left: "calc((100% - 3 * 1.5rem) / 4 + 1.5rem - 1.5rem)",
              top: "-1.5rem",
              width: "calc((100% - 3 * 1.5rem) / 4 + 3rem)",
              height: "calc(100% + 3rem)",
              background: "transparent",
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(138, 191, 255, 0.7) 0%, rgba(138, 191, 255, 0.6) 15%, rgba(138, 191, 255, 0.45) 30%, rgba(138, 191, 255, 0.35) 45%, rgba(138, 191, 255, 0.25) 58%, rgba(138, 191, 255, 0.15) 70%, rgba(138, 191, 255, 0.08) 82%, transparent 92%)
              `,
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 50%, rgba(0,0,0,0.95) 62%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.2) 90%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 50%, rgba(0,0,0,0.95) 62%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.2) 90%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
          {pricingTiers.map((tier, index) => {
            const isPro = tier.name === "Pro";
            return (
              <div
                key={tier.name}
                className={`relative group z-10 ${
                  tier.popular ? "scale-105 md:scale-110 glow-trigger" : ""
                }`}
              >
                <Card
                  className={`relative rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 ${
                    tier.popular ? "border-2 border-foreground/20" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge
                        variant="default"
                        className="rounded-none clean-border px-3 py-1"
                      >
                        {tier.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {tier.name}
                    </CardTitle>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-4xl font-bold text-foreground">
                        {tier.price}
                      </span>
                      {tier.price !== "Custom" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                    <CardDescription className="text-base mt-2">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 rounded-none p-3 border border-border/50">
                      <div className="text-sm text-muted-foreground mb-1">
                        API Requests
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {tier.apiLimit}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button
                      variant={tier.ctaVariant}
                      size="lg"
                      className={`w-full rounded-none ${
                        tier.ctaVariant === "default"
                          ? "hard-shadow hard-shadow-hover"
                          : "clean-border bg-transparent"
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Compare plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what's included in each tier
          </p>
        </div>

        <div className="bg-card rounded-md clean-border hard-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-semibold text-foreground">
                    Features
                  </th>
                  <th className="text-center p-6 font-semibold text-foreground">
                    Free
                  </th>
                  <th className="text-center p-6 font-semibold text-foreground bg-accent/10">
                    Pro
                  </th>
                  <th className="text-center p-6 font-semibold text-foreground">
                    Teams
                  </th>
                  <th className="text-center p-6 font-semibold text-foreground">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-6 text-foreground font-medium">
                    Access to Breeze & Gust models
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6 bg-accent/5">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-6 text-foreground font-medium">
                    API Requests/month
                  </td>
                  <td className="text-center p-6 text-muted-foreground">
                    1,000
                  </td>
                  <td className="text-center p-6 bg-accent/5 text-muted-foreground">
                    50,000
                  </td>
                  <td className="text-center p-6 text-muted-foreground">
                    50,000/user
                  </td>
                  <td className="text-center p-6 text-muted-foreground">
                    Unlimited
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-6 text-foreground font-medium">
                    Advanced Kite features
                  </td>
                  <td className="text-center p-6">—</td>
                  <td className="text-center p-6 bg-accent/5">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-6 text-foreground font-medium">
                    Priority support
                  </td>
                  <td className="text-center p-6">—</td>
                  <td className="text-center p-6 bg-accent/5">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-6 text-foreground font-medium">
                    Team collaboration
                  </td>
                  <td className="text-center p-6">—</td>
                  <td className="text-center p-6 bg-accent/5">—</td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-6 text-foreground font-medium">
                    Admin dashboard & analytics
                  </td>
                  <td className="text-center p-6">—</td>
                  <td className="text-center p-6 bg-accent/5">—</td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground font-medium">
                    SLA guarantees
                  </td>
                  <td className="text-center p-6">—</td>
                  <td className="text-center p-6 bg-accent/5">—</td>
                  <td className="text-center p-6">—</td>
                  <td className="text-center p-6">
                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8" />
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our pricing
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-md clean-border hard-shadow px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <Card className="p-12 bg-card rounded-md clean-border hard-shadow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join developers building with our open-source AI models. All models
            available on every tier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-none hard-shadow hard-shadow-hover"
            >
              Start Building
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none clean-border bg-transparent"
            >
              Contact us
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
