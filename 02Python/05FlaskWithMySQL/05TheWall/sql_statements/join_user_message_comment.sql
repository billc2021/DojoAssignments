select first_name, last_name, message, comment
from users
join messages
on users.id = messages.user_id
join comments
on messages.id = comments.message_id