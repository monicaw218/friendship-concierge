# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
`3.1.0`

* System dependencies
	* Node version 13 (13.14.0 worked for me)
	* psych-bad-alias error solved by ensuring you use gem psych < 4
	* SQLite3
	* These aren't really dependencies but react is installed by running:
		* `bundle exec rails webpacker:install`
		* `bundle exec rails webpacker:install:react`

* Configuration

* Database creation
	* `bundle exec rake db:migrate`

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
	* `bundle exec rails s`
