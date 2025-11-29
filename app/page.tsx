"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen relative -mt-20 md:-mt-24 pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-32 md:pt-40 lg:pt-48 pb-12 text-center min-h-[85vh] md:min-h-[95vh] lg:min-h-[100vh] flex items-start">
        {/* Background Image - extends to top of viewport, shows behind navbar */}
        <div className="absolute -top-20 md:-top-24 left-0 right-0 h-[calc(85vh+5rem)] md:h-[calc(95vh+6rem)] lg:h-[calc(100vh+6rem)] z-0">
          <Image
            src="/generated_upscaled.png"
            alt="Hero background"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Badge
            variant="outline"
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

          <p className="text-6xl md:text-7xl font-bold mb-6 text-balance text-foreground whitespace-nowrap">
            Beyond the Conflicts
          </p>
          <h2 className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto text-pretty">
            The first step towards an invisible version control.
          </h2>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-md px-12 py-6 text-lg hover:cursor-pointer hard-shadow hard-shadow-hover"
            >
              <Link
                href="https://github.com/SoarAILabs/glide"
                target="_blank"
                className="hover:cursor-pointer text-white"
              >
                Start Now!
              </Link>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <div className="flex flex-row justify-center items-center gap-2">
              Merge Conflict Resolution in{" "}
              <span className="underline underline-offset-2 text-white">
                <Badge variant="secondary">Alpha</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>{" "}
      {/*Big screen section*/}
      <section className="relative z-10 px-6 -mt-32 md:-mt-64 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Card className="p-10 md:p-12 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group w-full max-w-7xl">
              <div className="aspect-video rounded-none mb-8 flex items-center justify-center transition-colors">
                <video
                  src="/merge-conflict-demo.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Video Demo Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                But what is Glide?
              </h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Glide is an MCP that focuses on speed & reliability more than
                  anything. Our aim was to fix the age old problems with Git and
                  this MCP does it and it does it{" "}
                  <span className="italic">fast</span>. Currently, it focuses on
                  two major but overlooked problems:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Merge conflicts</li>
                  <li>Large and unorganized commit history</li>
                </ul>
                <p>
                  We use semantically understand your codebase to generate a
                  clean and organized commit history and use fine-tuned models
                  to resolve merge conflicts.
                </p>
                <p>
                  Read more about how Glide MCP works in our{" "}
                  <span className="underline underline-offset-2 hover:cursor-pointer">
                    <Link href="/blog/introducing-glide">blog</Link>.{" "}
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-md hard-shadow hover:cursor-pointer hard-shadow-hover"
                >
                  <Link href="/docs/getting-started">Learn More</Link>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-md clean-border bg-transparent hover:cursor-pointer"
                >
                  <Link href="/blog/introducing-glide/features">
                    View Features
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right Column - Visual Content */}
            <div className="relative">
              <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300">
                <div className="aspect-video rounded-none flex items-center justify-center">
                  <Image
                    src="/merge-conflict-demo.png"
                    alt="Merge conflict"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative">
              <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300">
                <div className="aspect-video rounded-none flex items-center justify-center">
                  <Image
                    src="/merge-conflict-demo.png"
                    alt="Merge conflict"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </Card>
            </div>
            {/* Right Column - Visual Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Fast, lightweight, and incredibly easy to use
              </h2>
              <p className="text-lg text-muted-foreground">
                Glide MCP is lightning-fast, lightweight, and designed for
                effortless use. We limit the number of tools exposed in Glide
                intentionally. You will notice the speed &amp; performance we
                offer after only a day of use.
                <br />
                <br />
                We also plan on using top-of-the-line inference providers to
                make sure you get the best possible results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We love our community!
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our Discord to connect with the team and other users.
                You’ll get quick support, early previews, community tips, and a
                place to share what you’re building. New members are always
                welcome.
              </p>
              <ul className="text-sm text-muted-foreground mt-3 list-disc pl-5 space-y-1">
                <li>Announcements, previews, and roadmap discussions</li>
                <li>Showcase your projects and get feedback</li>
              </ul>
              <a
                href="https://discord.gg/zaYsTEqh"
                className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none"
                aria-label="Join our Discord"
                rel="noopener noreferrer"
                target="_blank"
              >
                Join our Discord
              </a>
            </div>
            {/* Right Column */}
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Zero Data Retention Policy by Design
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our Glide MCP focuses on speed &amp; reliability. On top of
                  that we don't store any data on our servers. You bring your
                  own API keys as well. This means you are in full control of
                  your data.
                  <br />
                  <br />
                  Our goal is to create secure, high-performance tools that
                  truly help. We adhere to industry standards and always
                  prioritize people first in everything we do.
                </p>
              </div>
              <br />

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Future Tools & Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  We are planning on building more tools and services in the
                  future & this would mean that we have to retain some your
                  codebase information or data on our servers.
                  <br />
                  <br />
                  We will be transparent about it and give you the option to
                  opt-out. Read more about our next & biggest project{" "}
                  <span className="underline underline-offset-2 hover:cursor-pointer">
                    <Link href="/blog/context-engine-of-the-future">Kite</Link>
                  </span>
                  .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to build the future?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            “I think it's much more interesting to live not knowing than to have
            answers which might be wrong.” — Richard Feynman
          </p>
        </div>
      </section>
    </div>
  );
}
