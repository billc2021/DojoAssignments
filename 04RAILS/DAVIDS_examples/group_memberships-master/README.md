# Group Memberships DB

### ERD
```
users
-name

groups
-name
-admin_id

groups_users
-user_id
-group_id

```

### GENERATION COMMANDS

```bash
rails generate model User name:string
rails generate model Group name:string admin:references
rails generate model GroupsUser user:references group:references
```

Main changes are located within:

* [user.rb](./app/models/user.rb)
* [group.rb](./app/models/group.rb)

These changes allow us to do:

```ruby
g = Group.first
u = User.first
g.members << u  # Creates joining record
puts u.groups  # Will show first group
puts g.admin  # Shows whichever user is admin for group
```
