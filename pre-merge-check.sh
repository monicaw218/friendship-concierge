git diff-tree -r --no-commit-id --name-only head origin/main | grep '\.rb$' | xargs rubocop
yarn test
bundle exec rails test
