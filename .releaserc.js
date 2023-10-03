module.exports = {
    branches: ["master"], // Set the branch you want to trigger releases on
  
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      [
        "@semantic-release/exec",
        {
          prepareCmd: "npx lerna version --conventional-commits --yes",
        },
      ],
      [
        "@semantic-release/git",
        {
          assets: ["package.json", "CHANGELOG.md"],
          message:
            "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
        },
      ],
      "@semantic-release/github",
    ],
  };
  