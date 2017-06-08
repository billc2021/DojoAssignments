require 'test_helper'

class StudentsControllerTest < ActionController::TestCase
  setup do
    @dojo = dojos(:one)
    @student = students(:one)
  end

  test "should get index" do
    get :index, params: { dojo_id: @dojo }
    assert_response :success
  end

  test "should get new" do
    get :new, params: { dojo_id: @dojo }
    assert_response :success
  end

  test "should create student" do
    assert_difference('Student.count') do
      post :create, params: { dojo_id: @dojo, student: @student.attributes }
    end

    assert_redirected_to dojo_student_path(@dojo, Student.last)
  end

  test "should show student" do
    get :show, params: { dojo_id: @dojo, id: @student }
    assert_response :success
  end

  test "should get edit" do
    get :edit, params: { dojo_id: @dojo, id: @student }
    assert_response :success
  end

  test "should update student" do
    put :update, params: { dojo_id: @dojo, id: @student, student: @student.attributes }
    assert_redirected_to dojo_student_path(@dojo, Student.last)
  end

  test "should destroy student" do
    assert_difference('Student.count', -1) do
      delete :destroy, params: { dojo_id: @dojo, id: @student }
    end

    assert_redirected_to dojo_students_path(@dojo)
  end
end
