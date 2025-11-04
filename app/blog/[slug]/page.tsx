import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-posts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-[#f9fafb] relative -mt-20 pt-20">
      {/* Diagonal Fade Grid Background - Top Left */}
      <div
        className="absolute -top-20 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 0% 0%, #000 20%, transparent 60%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 0% 0%, #000 20%, transparent 60%)",
        }}
      />

      {/* Diagonal Fade Grid Background - Top Right */}
      <div
        className="absolute -top-20 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 20%, transparent 60%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 20%, transparent 60%)",
        }}
      />

      {/* Diagonal Fade Bottom Grid Left Background */}
      <div
        className="absolute -top-20 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 0% 100%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 0% 100%, #000 70%, transparent 100%)",
        }}
      />

      {/* Diagonal Fade Bottom Grid Right Background */}
      <div
        className="absolute -top-20 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 100% 100%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 100% 100%, #000 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 rounded-none clean-border">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <article>
          <Card className="rounded-md clean-border hard-shadow p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                {post.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                )}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {post.content.split("\n").map((paragraph, index) => {
                  // Handle markdown-style headers
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                        {paragraph.slice(2)}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                        {paragraph.slice(3)}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                        {paragraph.slice(4)}
                      </h3>
                    );
                  }
                  // Handle numbered lists
                  if (/^\d+\.\s/.test(paragraph)) {
                    return (
                      <div key={index} className="my-2 ml-4">
                        {paragraph}
                      </div>
                    );
                  }
                  // Regular paragraph
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return <br key={index} />;
                })}
              </div>
            </div>
          </Card>
        </article>
      </div>
    </div>
  );
}
