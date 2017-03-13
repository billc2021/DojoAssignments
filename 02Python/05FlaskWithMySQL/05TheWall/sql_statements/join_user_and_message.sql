select first_name, last_name, message
from users
join messages
on users.id = messages.user_id
