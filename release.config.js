module.exports = {
    branches: ['master'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
        },
      ],
      [
        '@semantic-release/github',
        {
          assets: 'dist/*', // Modify this based on your build output directory
        },
      ],
    ],
  };
  