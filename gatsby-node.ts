import { CreatePagesResult } from "@shared/interfaces";
import { CreateWebpackConfigArgs, CreatePagesArgs } from "gatsby";
import path from "path";

const postTemplate = path.resolve(`./src/templates/post.tsx`);

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

exports.createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `) as CreatePagesResult;

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    createPage({
      path: `post/${node.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
