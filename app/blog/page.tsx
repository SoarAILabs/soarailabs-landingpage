"use client";

import { getAllBlogPosts } from "@/lib/blog-posts";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const router = useRouter();
  const [clickedPost, setClickedPost] = useState<string | null>(null);

  const handlePostClick = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    setClickedPost(slug);
    setTimeout(() => {
      router.push(`/blog/${slug}`);
    }, 300);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes borderPulse {
            0% {
              border-color: rgb(59, 130, 246);
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.8);
              transform: scale(1);
              filter: blur(0px);
            }
            50% {
              border-color: rgb(59, 130, 246);
              box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.6);
              transform: scale(1.02);
              filter: blur(2px);
            }
            100% {
              border-color: rgb(59, 130, 246);
              box-shadow: 0 0 40px 15px rgba(59, 130, 246, 0);
              transform: scale(1.05);
              filter: blur(8px);
            }
          }
          .border-pulse {
            animation: borderPulse 0.3s ease-out forwards;
          }
        `,
        }}
      />
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Latest articles and updates from our team
            </p>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                onClick={(e) => handlePostClick(post.slug, e)}
                className="block group no-underline outline-none cursor-pointer"
              >
                <div
                  className={`relative flex items-center gap-6 group-hover:opacity-95 transition-all duration-300 rounded-md p-4 bg-white border ${
                    clickedPost === post.slug
                      ? "border-pulse border-blue-500"
                      : "border-border/50"
                  }`}
                >
                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-6 w-full">
                    {/* Image Thumbnail */}
                    <div className="relative w-48 h-32 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.jpg"
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
