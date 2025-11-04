"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Globe,
  Users,
  Sparkles,
  Play,
  Database,
  MessageSquare,
  BarChart3,
  FileSpreadsheet,
  Brain,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const tabValues = ["e-commerce", "saas", "marketing", "enterprise", "startups"];
const tabLabels = ["E-commerce", "SaaS", "Marketing", "Enterprise", "Startups"];

function LiquidTabs() {
  const [activeTab, setActiveTab] = useState("e-commerce");
  const [previousTab, setPreviousTab] = useState("e-commerce");
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    direction: "left" | "right";
  }>({ left: 0, width: 0, direction: "right" });
  const [isAnimating, setIsAnimating] = useState(false);

  const tabsListRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const updateIndicator = () => {
      const activeTrigger = triggerRefs.current[activeTab];
      const tabsList = tabsListRef.current;

      if (!activeTrigger || !tabsList) return;

      const tabsListRect = tabsList.getBoundingClientRect();
      const triggerRect = activeTrigger.getBoundingClientRect();

      const left = triggerRect.left - tabsListRect.left;
      const width = triggerRect.width;

      // Determine direction
      const previousIndex = tabValues.indexOf(previousTab);
      const currentIndex = tabValues.indexOf(activeTab);
      const direction =
        currentIndex > previousIndex
          ? "right"
          : currentIndex < previousIndex
            ? "left"
            : "right";

      setIndicatorStyle({ left, width, direction });

      // Only animate if tab actually changed
      if (previousTab !== activeTab) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
      }
    };

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(updateIndicator, 10);

    return () => clearTimeout(timeoutId);
  }, [activeTab, previousTab]);

  const handleTabChange = (value: string) => {
    setPreviousTab(activeTab);
    setActiveTab(value);
  };

  return (
    <div className="flex justify-center mb-12">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full max-w-2xl"
      >
        <TabsList
          ref={tabsListRef}
          className="relative w-full flex-wrap justify-center h-auto p-1 rounded-md bg-muted/50"
        >
          {/* Liquid Indicator */}
          <div
            className="absolute h-[calc(100%-8px)] top-1 bg-background shadow-sm rounded-md overflow-hidden"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              transition:
                indicatorStyle.direction === "right"
                  ? "left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  : "left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Liquid morphing layers - creates the liquid flow effect */}
            {/* Right side - starts animating immediately when going right */}
            <div
              className="absolute inset-0 bg-background"
              style={{
                clipPath:
                  isAnimating && indicatorStyle.direction === "right"
                    ? "polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%)"
                    : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                transition:
                  indicatorStyle.direction === "right"
                    ? "clip-path 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                    : "clip-path 0.4s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
            {/* Left side - follows with delay when going right */}
            <div
              className="absolute inset-0 bg-background"
              style={{
                clipPath:
                  isAnimating && indicatorStyle.direction === "right"
                    ? "polygon(0% 0%, 60% 0%, 60% 100%, 0% 100%)"
                    : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                transition:
                  indicatorStyle.direction === "right"
                    ? "clip-path 0.4s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                    : "clip-path 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
          </div>

          {tabValues.map((value, index) => (
            <TabsTrigger
              key={value}
              ref={(el) => {
                triggerRefs.current[value] = el;
              }}
              value={value}
              className="relative z-10 rounded-md"
            >
              {tabLabels[index]}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg relative -mt-20 md:-mt-24 pt-20 md:pt-24">
      {/* Checkered Pattern Background */}
      <div className="fixed inset-0 checkered-pattern opacity-30" />

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24 text-center min-h-[85vh] md:min-h-[95vh] lg:min-h-[100vh] flex items-center">
        {/* Background Image - extends to top of viewport, shows behind navbar */}
        <div className="absolute -top-20 md:-top-24 left-0 right-0 h-[calc(85vh+5rem)] md:h-[calc(95vh+6rem)] lg:h-[calc(100vh+6rem)] z-0">
          <Image
            src="/generated_upscaled.png"
            alt="Hero background"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 shadow-md clean-border rounded-md"
          >
            Not Backed by
            <img
              src="https://www.vectorlogo.zone/logos/ycombinator/ycombinator-icon.svg"
              alt="YC"
              className="w-4 h-4 ml-1 mr-1"
            />{" "}
            (yet)
          </Badge>

          <p className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground whitespace-nowrap">
            Beyond the Conflicts
          </p>

          <h2 className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            The first step towards an invisible version control.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-md hard-shadow hard-shadow-hover"
            >
              Start Building
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-md clean-border bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground mb-1">
                uptime guaranteed
              </div>
              <div className="text-xs text-muted-foreground">
                Enterprise SLA
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold mb-2">10x</div>
              <div className="text-sm text-muted-foreground mb-1">
                faster deployment
              </div>
              <div className="text-xs text-muted-foreground">
                vs traditional hosting
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold mb-2">500k+</div>
              <div className="text-sm text-muted-foreground mb-1">
                developers trust us
              </div>
              <div className="text-xs text-muted-foreground">Growing daily</div>
            </Card>

            <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground mb-1">
                expert support
              </div>
              <div className="text-xs text-muted-foreground">
                Always here to help
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See it in action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch how developers are transforming their workflow with our
              tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="aspect-video bg-muted rounded-none mb-6 flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Deploy in 30 seconds
              </h3>
              <p className="text-muted-foreground mb-4">
                From git push to live site in under 30 seconds. See how our edge
                network delivers instant deployments.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none clean-border bg-transparent"
              >
                Watch Demo
              </Button>
            </Card>

            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="aspect-video bg-muted rounded-none mb-6 flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                AI-powered optimization
              </h3>
              <p className="text-muted-foreground mb-4">
                Watch our AI automatically optimize your site's performance,
                SEO, and user experience in real-time.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none clean-border bg-transparent"
              >
                Watch Demo
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Examples Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              One platform, endless solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how different teams use our platform to solve their
              unique challenges
            </p>
          </div>

          {/* Category Tabs */}
          <LiquidTabs />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Data Organization Example */}
            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-none flex items-center justify-center">
                  <Database className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Smart Data Organization
                </h3>
              </div>

              <div className="bg-muted/50 rounded-none p-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-background rounded-none text-sm">
                    <span className="font-medium">Company</span>
                    <span className="text-muted-foreground">Funding Stage</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded-none text-sm">
                    <span>Mintlify</span>
                    <Badge variant="secondary" className="text-xs rounded-none">
                      Generating...
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded-none text-sm">
                    <span>Etched</span>
                    <Badge variant="outline" className="text-xs rounded-none">
                      Series A
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Define custom columns using AI and fetch specific data on
                demand. Detail the data type and format, prompt for information,
                and sort to your needs.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none clean-border "
              >
                Try Example
              </Button>
            </Card>

            {/* AI Chat Example */}
            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-none flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Ask Chatbot for Data
                </h3>
              </div>

              <div className="bg-muted/50 rounded-none p-4 mb-4">
                <div className="space-y-3">
                  <div className="bg-background p-3 rounded-none">
                    <p className="text-sm text-muted-foreground mb-1">
                      You asked:
                    </p>
                    <p className="text-sm">
                      "Show me all healthcare companies with Series A funding"
                    </p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-none">
                    <p className="text-sm text-muted-foreground mb-1">
                      AI Response:
                    </p>
                    <p className="text-sm">
                      Found 12 healthcare companies. Filtering by Series A...
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Use our contextually aware engine to query your spreadsheet like
                a conversation. Get instant insights from your data.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none clean-border bg-transparent"
              >
                Try Example
              </Button>
            </Card>
          </div>

          {/* Additional Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Analytics Dashboard
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Transform raw data into beautiful, interactive dashboards with
                real-time updates and custom visualizations.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                View Example <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <FileSpreadsheet className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Lead Generation
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Automatically enrich prospect data with company information,
                LinkedIn profiles, and contact details.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                View Example <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                AI Automation
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Set up intelligent workflows that automatically categorize,
                enrich, and process your data as it comes in.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                View Example <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Everything you need to ship faster
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From idea to production in minutes, not months. Our platform
              handles the complexity so you can focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Developer Experience
              </h3>
              <p className="text-muted-foreground mb-4">
                Built for developers, by developers. Intuitive APIs,
                comprehensive docs, and tools that just work.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground mb-4">
                Edge-optimized infrastructure that delivers your content at the
                speed of light, anywhere in the world.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Enterprise Security
              </h3>
              <p className="text-muted-foreground mb-4">
                Bank-grade security with SOC 2 compliance, DDoS protection, and
                automatic SSL certificates.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Global Scale
              </h3>
              <p className="text-muted-foreground mb-4">
                Deploy to 100+ edge locations worldwide. Your users get the
                fastest experience, no matter where they are.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Team Collaboration
              </h3>
              <p className="text-muted-foreground mb-4">
                Built-in collaboration tools, preview deployments, and seamless
                integration with your existing workflow.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                AI-Powered
              </h3>
              <p className="text-muted-foreground mb-4">
                Intelligent optimization, automated testing, and AI-assisted
                development to supercharge your productivity.
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-card rounded-md clean-border hard-shadow">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to build the future?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust our platform to deliver
              exceptional web experiences at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-none hard-shadow hard-shadow-hover"
              >
                Start Building Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none clean-border bg-transparent"
              >
                Talk to Sales
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
