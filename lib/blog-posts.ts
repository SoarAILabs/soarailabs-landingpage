export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author?: string;
}

// Helper function to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Sample blog posts - replace with your actual blog content
export const blogPosts: BlogPost[] = [
  {
    title: `"MCPs can be packages?"`,
    slug: createSlug("mcps-can-be-packages?"),
    excerpt: "Learn how amaan learnt how to make it easier for users to use our Glide MCP.",
    content: `
# The Beginning
This was an interesting find because I discovered it while working on this website! I was trying to add a navbar and buttons from shadcn (like we all do), and I didn’t want to go to their website and manually install them. So I did what any Gen-Z engineer would do: I started looking to see if they had an MCP.

Living in the age we're living in, of course they had an MCP. So I installed it, added it to my project, and 

    

    `.trim(),
    publishedAt: "11/2/2025",
    author: "Amaan",
  }
];

// Function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Function to get a blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

