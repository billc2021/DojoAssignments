json.extract! dojo_student, :id, :first_name, :last_name, :email, :created_at, :updated_at
json.url dojo_student_url(dojo_student, format: :json)
