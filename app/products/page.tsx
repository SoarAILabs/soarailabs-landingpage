import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const products = [
  {
    category: "Our Family of Models",
    items: [
      {
        title: "Breeze",
        description: "Lightweight and fast AI model for everyday tasks",
        features: [
          "Fast response times",
          "Optimized for efficiency",
          "Ideal for quick tasks",
          "Low resource consumption",
        ],
        useCase: "Perfect for everyday automation and simple AI tasks",
        status: "Available",
      },
      {
        title: "Gust",
        description: "Powerful AI model for complex workloads",
        features: [
          "Advanced reasoning capabilities",
          "Handles complex workflows",
          "Enterprise-grade performance",
          "Scalable architecture",
        ],
        useCase: "Designed for demanding applications and enterprise use",
        status: "Coming Soon",
      },
    ],
  },
  {
    category: "MCP",
    items: [
      {
        title: "Glide",
        description: "Seamless integration and collaboration",
        features: [
          "Easy API integration",
          "Multi-platform support",
          "Real-time collaboration",
          "Secure data handling",
        ],
        useCase: "Streamline your workflow with seamless tool integration",
        status: "Coming this week!",
      },
    ],
  },
  {
    category: "Our biggest project yet",
    items: [
      {
        title: "Kite",
        description: "The first ever autocomplete for your version control",
        features: [
          "AI-powered autocomplete",
          "Version control integration",
          "Context-aware suggestions",
          "Reduces merge conflicts",
        ],
        useCase:
          "Revolutionize your development workflow with intelligent version control",
        status: "Alpha",
      },
    ],
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative -mt-20 pt-20">
      {/* Top Fade Grid Background */}
      <div
        className="absolute -top-20 left-0 right-0 h-full z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 35% at 50% 0%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 80% 35% at 50% 0%, #000 30%, transparent 70%)",
        }}
      />

      {/* Bottom Fade Grid Background */}
      <div
        className="absolute -top-20 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 90%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0.3) 98%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 90%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0.3) 98%, transparent 100%)",
        }}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Explore our family of AI-powered solutions and tools
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="space-y-16">
          {products.map((category, categoryIndex) => {
            return (
              <div key={categoryIndex} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center justify-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>

                {/* Product Cards Grid - Centered */}
                <div className="flex flex-wrap justify-center items-start gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="w-full max-w-sm rounded-md border-border/60 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-2xl font-bold text-foreground">
                            {item.title}
                          </CardTitle>
                          <Badge
                            variant={
                              item.status === "Available"
                                ? "default"
                                : item.status === "Beta"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="ml-2"
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Use Case
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.useCase}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {item.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start gap-2"
                              >
                                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-2">
                          <Button className="w-full" variant="outline">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Enter a new age of knowledge work
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            An AI-first workspace that enables fast, accurate research in
            spreadsheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[140px] hard-shadow">
              Try it now
            </Button>
            <Button size="lg" variant="outline" className="min-w-[140px]">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
