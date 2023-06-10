import { CreatePagesResult } from "@shared/interfaces";
import {
  CreateNodeArgs,
  CreatePagesArgs,
  CreatePageArgs,
  CreateSchemaCustomizationArgs,
  CreateWebpackConfigArgs,
} from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";
import readingTime from "reading-time";
import supportedLanguages from "./i18n";

type TranslationsByDirectory = { [key: string]: string };

const aboutTemplate = path.resolve(`./src/templates/about.tsx`);
const homeTemplate = path.resolve(`./src/templates/home.tsx`);
const postTemplate = path.resolve(`./src/templates/post.tsx`);
const postsTemplate = path.resolve(`./src/templates/posts.tsx`);
const successMessage = "Page created succesfully";
const divider =
  "----------------------------------------------------------------------------";
const attemptColor = "\x1b[36m%s\x1b[0m";
const successColor = "\x1b[32m%s\x1b[0m";
const errorColor = "\x1b[31m%s\x1b[0m";

/**
 * Creates all posts pages based on the language key received.
 *
 *
 * @param createPage - The createPage Fn.
 * @param langKey - The language key.
 * @param nodes - The MDX nodes.
 * @returns A callback function the creates the page.
 */
const createPosts =
  (
    createPage: CreatePagesArgs["actions"]["createPage"],
    langKey: string,
    nodes: Queries.Mdx[],
    translationsByDirectory: TranslationsByDirectory
  ) =>
  ({ fields, id, internal }: Queries.Mdx, index: number) => {
    try {
      const { slug } = fields;
      const { contentFilePath } = internal;
      const previous = index === nodes.length - 1 ? null : nodes[index + 1];
      const next = index === 0 ? null : nodes[index - 1];
      const startUrl = langKey === "en" ? "/posts" : `/${langKey}/posts`;
      const translations = translationsByDirectory[slug] ?? [];

      console.log(
        attemptColor,
        `Attempting to create post: ${slug} for ${langKey} language`
      );
      createPage({
        path: `${startUrl}/${slug}`,
        component: `${postTemplate}?__contentFilePath=${contentFilePath}`,
        context: {
          id,
          langKey,
          next,
          previous,
          slug,
          translations,
        },
      });
      console.log(successColor, successMessage, "\n", divider);
    } catch (error) {
      console.error(errorColor, error);
    }
  };

/**
 * Create non MDX pages based on the props received.
 * @param createPage - The createPage Fn.
 * @param props - The props to use.
 * @returns A callback function that creates the page.
 * */
const createNonMdxPage = (
  createPage: CreatePagesArgs["actions"]["createPage"],
  {
    component,
    langKey,
    message,
    path,
  }: { component: string; langKey: string; message: string; path: string }
) => {
  console.log(attemptColor, message);
  createPage({
    path,
    component,
    context: {
      langKey,
    },
  });
  console.log(successColor, successMessage, "\n", divider);
};

/**
 * Creates home and post list pages based on the language key received.
 * @param createPage - The createPage Fn.
 * @param langKey - The language key.
 * @returns A callback function the creates the home and posts page.
 */
const createNonMdxPages =
  (createPage: CreatePagesArgs["actions"]["createPage"]) =>
  (langKey: string) => {
    try {
      const aboutPath = langKey === "en" ? "/about" : `/${langKey}/about`;
      const heroPath = langKey === "en" ? "/" : `/${langKey}`;
      const postsPath = langKey === "en" ? "/posts" : `/${langKey}/posts`;

      // Create home pages
      createNonMdxPage(createPage, {
        component: homeTemplate,
        langKey,
        message: `Attempting to create homepage for ${langKey} language`,
        path: heroPath,
      });

      // Create posts pages
      createNonMdxPage(createPage, {
        component: postsTemplate,
        langKey,
        message: `Attempting to create posts page for ${langKey} language`,
        path: postsPath,
      });

      // Create about pages
      createNonMdxPage(createPage, {
        component: aboutTemplate,
        langKey,
        message: `Attempting to create about page for ${langKey} language`,
        path: aboutPath,
      });
      console.log(successColor, successMessage, "\n", divider);
    } catch (error) {
      console.error(errorColor, error);
    }
  };

/**
 * Creates an object containing all the slugs names and wether they have translations or not.
 *
 *
 * @param translationsByDir - Initial reduce object.
 * @param node - The mdx Node.
 * @returns the generated translationsByDir object.
 */
const toTranslations = (
  translationsByDir: TranslationsByDirectory,
  node: Queries.Mdx
) => {
  const {
    fields: { langKey, slug: directoryName },
  } = node;
  const hasKey = !!translationsByDir[directoryName];
  const newDirObj = {
    ...translationsByDir,
    [directoryName]: hasKey
      ? [...translationsByDir[directoryName], langKey]
      : [langKey],
  };

  return langKey !== "en"
    ? (newDirObj as TranslationsByDirectory)
    : translationsByDir;
};

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

    createNodeField({
      node,
      name: "timeToRead",
      value: readingTime(node.body as string),
    });
  }
};

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  actions.createTypes(`
    type Mdx implements Node  {
      fields: MdxFields!
      frontmatter: Frontmatter
    }
    type MdxFields {
      langKey: String!
      slug: String!
    }
    type Frontmatter {
      author: String
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

  const getTranslationsByDirectory = async () => {
    const result = (await graphql(`
      query AllNodes {
        allMdx {
          nodes {
            id
            fields {
              langKey
              slug
            }
          }
        }
      }
    `)) as CreatePagesResult;

    const allNodes = result.data?.allMdx.nodes ?? [];

    const args: [
      (
        directories: TranslationsByDirectory,
        node: Queries.Mdx
      ) => TranslationsByDirectory,
      TranslationsByDirectory
    ] = [toTranslations, {}];
    return allNodes.reduce<TranslationsByDirectory>(...args);
  };

  const translationsByDirectory = await getTranslationsByDirectory();

  const createNodeByLangCallback =
    (translationsByDirectory: TranslationsByDirectory) =>
    async (langKey: string) => {
      const result = (await graphql(`
    query NodesByLang {
      allMdx(
        filter: { fields: { langKey: { eq: "${langKey}" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            title
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

      const nodesByLang = result.data?.allMdx.nodes ?? [];

      const createPostsCallback = createPosts(
        createPage,
        langKey,
        [...nodesByLang],
        translationsByDirectory
      );
      nodesByLang.forEach(createPostsCallback);
    };

  // Create home and posts pages.
  const createNonMdxPagesCallback = createNonMdxPages(createPage);
  Object.keys(supportedLanguages).forEach(createNonMdxPagesCallback);

  // Create post pages.
  const createNodeByLang = createNodeByLangCallback(translationsByDirectory);
  const queries = Object.keys(supportedLanguages).map(createNodeByLang);
  await Promise.all(queries);
};

exports.onCreatePage = async ({ page, actions }: CreatePageArgs) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/404\/$/)) {
    const oldPage = { ...page };

    page.context = {
      isNotFoundPage: true,
    };

    // Recreate the modified page
    deletePage(oldPage);
    createPage(page);
  }
};
