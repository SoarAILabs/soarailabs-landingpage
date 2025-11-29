// @ts-nocheck -- skip type checking
import * as d_docs_3 from "../content/docs/guides/installation.mdx?collection=docs"
import * as d_docs_2 from "../content/docs/guides/configuration.mdx?collection=docs"
import * as d_docs_1 from "../content/docs/api/overview.mdx?collection=docs"
import * as d_docs_0 from "../content/docs/index.mdx?collection=docs"
import * as d_blogPosts_1 from "../content/blog/why-us.mdx?collection=blogPosts"
import * as d_blogPosts_0 from "../content/blog/introducing-glide.mdx?collection=blogPosts"
import { _runtime } from "fumadocs-mdx/runtime/next"
import * as _source from "../source.config"
export const blogPosts = _runtime.doc<typeof _source.blogPosts>([{ info: {"path":"introducing-glide.mdx","fullPath":"content/blog/introducing-glide.mdx"}, data: d_blogPosts_0 }, { info: {"path":"why-us.mdx","fullPath":"content/blog/why-us.mdx"}, data: d_blogPosts_1 }]);
export const docs = _runtime.docs<typeof _source.docs>([{ info: {"path":"index.mdx","fullPath":"content/docs/index.mdx"}, data: d_docs_0 }, { info: {"path":"api/overview.mdx","fullPath":"content/docs/api/overview.mdx"}, data: d_docs_1 }, { info: {"path":"guides/configuration.mdx","fullPath":"content/docs/guides/configuration.mdx"}, data: d_docs_2 }, { info: {"path":"guides/installation.mdx","fullPath":"content/docs/guides/installation.mdx"}, data: d_docs_3 }], [])