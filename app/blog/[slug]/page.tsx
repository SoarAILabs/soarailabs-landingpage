import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/blog-source";
import { ArrowLeft } from "lucide-react";
export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <>
      <article className="container flex flex-col px-4 py-8">
        <header className="mb-6">
          <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
          <p className="mb-2 text-fd-muted-foreground">
            {page.data.description}
          </p>
          <div>
            <p className="font-medium">
              Written by:{" "}
              <span className="font-light underline underline-offset-4">
                <Link target="_blank" href={`https://x.com/BilwarAmaan`}>
                  {String(page.data.author)}
                </Link>
              </span>
              <span className="mx-2 text-sm text-fd-muted-foreground">•</span>
              <span className="ml-1 text-sm text-fd-muted-foreground">
                {new Date(String(page.data.date)).toDateString()}
              </span>
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/blog"
              className="text-sm inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hover:underline underline-offset-4">Back</span>
            </Link>
          </div>
        </header>

        <div className="my-4 md:my-6">
          <InlineTOC items={page.data.toc} />
        </div>

        <div className="prose min-w-0">
          <Mdx components={defaultMdxComponents} />
        </div>
        <div className="flex flex-col gap-4 text-sm mt-12">
          <div>
            <p className="font-medium">
              Written by:{" "}
              <span className="font-light underline underline-offset-4">
                <Link target="_blank" href={`https://x.com/BilwarAmaan`}>
                  {String(page.data.author)}
                </Link>
              </span>
              <span className="mx-2 text-sm text-fd-muted-foreground">•</span>
              <span className="ml-1 text-sm text-fd-muted-foreground">
                {new Date(String(page.data.date)).toDateString()}
              </span>
            </p>
          </div>
          <div></div>
        </div>
      </article>
    </>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page: { slugs: string[] }) => ({
    slug: page.slugs[0],
  }));
}
