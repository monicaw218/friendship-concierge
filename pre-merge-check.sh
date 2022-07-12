rubocop $(git diff --name-only main | grep .rb)
yarn fix
bundle exec rails test
