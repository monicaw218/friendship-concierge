rubocop $(git diff --name-only main | grep .rb)
yarn test
bundle exec rails test
