module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!');

  app.on('release.published', async context => {
    const { release: { tag_name: release }, repository: { name: repo, owner: { login: owner } } } = context.payload;
    app.log(`Release ${release} published on ${owner}/${repo}!`);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
