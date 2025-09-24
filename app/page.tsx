import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Checkered Pattern Background */}
      <div className="fixed inset-0 checkered-pattern opacity-30" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg text-foreground">Kite</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Product
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button
            size="sm"
            className="rounded-none hard-shadow hard-shadow-hover"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24 text-center min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <Image
            src="/kite-landing--1.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-top mask-radial-bottom"
          />
          {/* Optional readability overlay */}
          <div className="absolute inset-0 radial-bottom-overlay" />
        </div>
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 rounded-none shadow-md clean-border"
          >
            Not Backed by
            <img
              src="https://www.vectorlogo.zone/logos/ycombinator/ycombinator-icon.svg"
              alt="YC"
              className="w-4 h-4 ml-1 mr-1"
            />
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground whitespace-nowrap">
            Kite: Beyond the Conflicts
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            The first step towards an invisible version control.
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
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground mb-1">
                uptime guaranteed
              </div>
              <div className="text-xs text-muted-foreground">
                Enterprise SLA
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold text-accent mb-2">10x</div>
              <div className="text-sm text-muted-foreground mb-1">
                faster deployment
              </div>
              <div className="text-xs text-muted-foreground">
                vs traditional hosting
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold text-accent mb-2">500k+</div>
              <div className="text-sm text-muted-foreground mb-1">
                developers trust us
              </div>
              <div className="text-xs text-muted-foreground">Growing daily</div>
            </Card>

            <Card className="p-6 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
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
              Watch how teams are transforming their workflow with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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
                className="hover:translate-y-0.5 hover:cursor-pointer rounded-none clean-border bg-transparent"
              >
                Watch Demo
              </Button>
            </Card>

            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Badge variant="default" className="px-4 py-2 rounded-none">
              E-commerce
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 rounded-none">
              SaaS
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 rounded-none">
              Marketing
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 rounded-none">
              Enterprise
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 rounded-none">
              Startups
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Data Organization Example */}
            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300">
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
            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300">
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
            <Card className="p-6 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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

            <Card className="p-6 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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

            <Card className="p-6 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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
            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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

            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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

            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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

            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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

            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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

            <Card className="p-8 bg-card rounded-none clean-border hard-shadow hard-shadow-hover transition-all duration-300 group">
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
          <Card className="p-12 bg-card rounded-none clean-border hard-shadow">
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
      <footer className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-semibold text-lg text-foreground">
                Kite
              </span>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Status
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Kite. Built with modern web technologies.
          </div>
        </div>
      </footer>
    </div>
  );
}
