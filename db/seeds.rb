# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(first_name: 'First', last_name: 'User', email: 'fuser@railstutorial.org', password: 'abc1234',
  password_confirmation: 'abc1234')
User.create!(first_name: 'Second', last_name: 'User', email: 'second@user.com', password: 'password123',
  password_confirmation: 'password123')

50.times do |i|
  hobbies = []
  rand(1..5).times do
    hobbies << Faker::Hobby.activity
  end
  hobbies = hobbies.join(', ')

  Friend.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    nickname: nil,
    address_line1: Faker::Address.street_address,
    address_line2: Faker::Address.secondary_address,
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    zip: Faker::Address.zip_code,
    interests: hobbies,
    user_id: (i % User.count) + 1,
    birthday: Time.zone.at(0.0 + (rand * (Time.now.to_f - 0.0.to_f)))
  )
end
