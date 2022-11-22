# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Delete any list that was already there, optional,
List.delete_all

@counter = 0

10.times do
  List.create(
    title: "#{Faker::Movie.title}#{@counter}", 
    desc: Faker::Movie.quote
  )
  @counter += 1
end

# bundle exec rails db:seed