require 'test_helper'

class ReviewsControllerTest < ActionController::TestCase
  setup do
    @book = books(:one)
    @review = reviews(:one)
  end

  test "should get index" do
    get :index, params: { book_id: @book }
    assert_response :success
  end

  test "should get new" do
    get :new, params: { book_id: @book }
    assert_response :success
  end

  test "should create review" do
    assert_difference('Review.count') do
      post :create, params: { book_id: @book, review: @review.attributes }
    end

    assert_redirected_to book_review_path(@book, Review.last)
  end

  test "should show review" do
    get :show, params: { book_id: @book, id: @review }
    assert_response :success
  end

  test "should get edit" do
    get :edit, params: { book_id: @book, id: @review }
    assert_response :success
  end

  test "should update review" do
    put :update, params: { book_id: @book, id: @review, review: @review.attributes }
    assert_redirected_to book_review_path(@book, Review.last)
  end

  test "should destroy review" do
    assert_difference('Review.count', -1) do
      delete :destroy, params: { book_id: @book, id: @review }
    end

    assert_redirected_to book_reviews_path(@book)
  end
end
