# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

50.times do |i|
  hobbies = []
  rand(1..5).times do
      hobbies << Faker::Hobby.activity
  end
  hobbies = hobbies.join(', ')

  Friend.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
    nickname: nil,
    age: rand(23..35),
    address_line_1: Faker::Address.street_address,
    address_line_2: Faker::Address.secondary_address,
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    zip: Faker::Address.zip_code,
    interests: hobbies
  )
end
