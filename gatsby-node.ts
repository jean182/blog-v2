import { CreatePagesResult } from "@shared/interfaces";
import {
  CreateNodeArgs,
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
  CreateWebpackConfigArgs,
} from "gatsby";
import path from "path";
import supportedLanguages from "./i18n";
import { createFilePath } from "gatsby-source-filesystem";

const homeTemplate = path.resolve(`./src/templates/home.tsx`);
const postTemplate = path.resolve(`./src/templates/post.tsx`);
const postsTemplate = path.resolve(`./src/templates/posts.tsx`);

exports.onCreateNode = async ({
  node,
  getNode,
  actions: { createNodeField },
}: CreateNodeArgs) => {
  // Todo: Check if we still use this?
  if (node.internal.type === "Mdx") {
    const directoryName = node.internal.contentFilePath;
    const hasLangRegex = /\.(.*)\./;
    const match = directoryName?.match(hasLangRegex) ?? [];
    const [, langKey] = match;

    createNodeField({
      name: "langKey",
      node,
      value: langKey ?? "en",
    });

    const filePath = createFilePath({ node, getNode });
    const value = filePath.split("/")[1]?.replace("/", "");

    createNodeField({
      name: "slug",
      value,
      node,
    });
  }
};

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  actions.createTypes(`
    type Mdx implements Node  {
      fields: MdxFields!
    }
    type MdxFields {
      langKey: String!
      slug: String!
    }
  `);
};

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@context": path.resolve(__dirname, "src/context"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@templates": path.resolve(__dirname, "src/templates"),
      },
    },
  });
};

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  // Create Hero home page.
  Object.keys(supportedLanguages).forEach((langKey) => {
    createPage({
      path: langKey === "en" ? "/" : `/${langKey}/`,
      component: homeTemplate,
      context: {
        langKey,
      },
    });
  });

  // Create all posts home page.
  Object.keys(supportedLanguages).forEach((langKey) => {
    createPage({
      path: langKey === "en" ? "/posts/" : `/${langKey}/posts/`,
      component: postsTemplate,
      context: {
        langKey,
      },
    });
  });

  const result = (await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          fields {
            langKey
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)) as CreatePagesResult;

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Create blog posts pages.
  const nodes = result.data?.allMdx.nodes!;

  // const defaultLangPosts = nodes.filter(({ fields }) => fields.langKey === "en");

  nodes.forEach(({ fields, id, internal }) => {
    try {
      const { langKey, slug } = fields;
      const { contentFilePath } = internal;
      const startUrl = langKey === "en" ? "/post" : `/${langKey}/post`;
      createPage({
        path: `${startUrl}/${slug}`,
        component: `${postTemplate}?__contentFilePath=${contentFilePath}`,
        context: { id, slug },
      });
    } catch (error) {
      console.error(error);
    }
  });
};
