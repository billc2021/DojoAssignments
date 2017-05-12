# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
	{ name: 'Leia' }, # 1
	{ name: 'Vader' },
	{ name: 'Luke' },
	{ name: 'Han' },
	{ name: 'Chewie' },
	{ name: 'Boba' },
	{ name: 'Palpitine' }
])
Group.create([
	{ name: 'Imperialists', admin_id: 2 },
	{ name: 'Rebels', admin_id: 3 }
])
