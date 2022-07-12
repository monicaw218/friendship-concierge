rubocop $(git diff --name-only main)
yarn fix
bundle exec rails test
