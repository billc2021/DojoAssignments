## Form Data

#### Rails stores data in a hash, in the form below it is user (user[first_name], user[last])
    <form action='/users/' method='post'>
      <input type="hidden" name="authenticity_token" value="VxLCoqvap2IdbFioGuFfTadt+I5jVDPKxwg+6/1wPZIXUHTPyQzAq6Bat6MXlSF9HYrxQN3aXSZWZqJPMf2HOw==" />
      <input type='text' name='user[first_name]' />
      <input type='text' name='user[last_name]' />
      <input type='text' name='user[email]' />
      <input type='text' name='user[birthday]' />
      <input type='text' name='user[age]' />
      <input type='text' name='user[birth_place]' />
      <input type='text' name='user[hobbies]' />
      <input type='text' name='user[favorite_food]' />
      ...
    </form>

#### Template for creating a RESTful form for edit/update

        <form action="/blogs/<%= blog.id %>" method="post">
            <input type="hidden" name="_method" value="patch">
        </form>

#### Template for delete

    <a href="/blogs/<%= blog.id %>" data-method="delete">Delete this blog!</a>
