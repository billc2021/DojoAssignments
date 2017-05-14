## Simplifying the messages in the console
You may find what's logged in the console to be too much, making it harder for you to navigate things you printed/put in the controller as it may be buried underneath all the other logged messages.

To prevent many logged activities from appearing in the console, you can adjust your config/environments/development.rb and add the following:

    config.log_level = :warn
