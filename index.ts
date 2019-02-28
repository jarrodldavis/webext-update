import { Application } from 'probot';

module.exports = (app: Application) => {
  // Your code here
  app.log('Yay, the app was loaded!');

  app.on('release.published', async context => {
    const { release: { tag_name: release }, repository  } = context.payload;

    if (!repository) {
      app.log.error('No repository!');
      return;
    }

    const { name: repo, owner: { login: owner } } = repository;

    app.log(`Release ${release} published on ${owner}/${repo}!`);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
