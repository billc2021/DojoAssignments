class StudentsController < ApplicationController
  def index
    @students = Student.all
    render html: @students.inspect
  end

  def new
    @student = Student.create(student_params)
  end

  def create
    @dojo = Dofo.find(params[:dojo_id])
    @student = Student.create(student_params)
  end

  def show
    @dojo = Dojo.find(params[:dojo_id])
    @student = Student.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def student_params
      params.require(:student).perment(:first_name, :last_name, :email)
    end
end
