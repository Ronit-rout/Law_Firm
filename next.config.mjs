/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "");
  repo = repoName ? `/${repoName}` : "";
}

const nextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? "export" : undefined,
  basePath: repo,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
