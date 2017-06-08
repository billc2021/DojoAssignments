class StudentsController < ApplicationController
  before_action :set_students
  before_action :set_student, only: [:show, :edit, :update, :destroy]

  # GET dojos/1/students
  def index
    @students = @dojo.students
  end

  # GET dojos/1/students/1
  def show
  end

  # GET dojos/1/students/new
  def new
    @student = @dojo.students.build
  end

  # GET dojos/1/students/1/edit
  def edit
  end

  # POST dojos/1/students
  def create
    @student = @dojo.students.build(student_params)

    if @student.save
      # redirect_to([@student.dojo, @student], notice: 'Student was successfully created.')
      redirect_to([@student.dojo], notice: 'Student was successfully created')
    else
      render action: 'new'
    end
  end

  # PUT dojos/1/students/1
  def update
    if @student.update_attributes(student_params)
      # redirect_to([@student.dojo, @student], notice: 'Student was successfully updated.')
      redirect_to([@student.dojo], notice: 'Student was successfully updated')
    else
      render action: 'edit'
    end
  end

  # DELETE dojos/1/students/1
  def destroy
    @student.destroy

    # redirect_to dojo_students_url(@dojo)
    redirect_to([@student.dojo], notice: 'Student was successfully deleted')
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_students
      @dojo = Dojo.find(params[:dojo_id])
    end

    def set_student
      @student = @dojo.students.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def student_params
      params.require(:student).permit(:first_name, :last_name, :email)
    end
end
