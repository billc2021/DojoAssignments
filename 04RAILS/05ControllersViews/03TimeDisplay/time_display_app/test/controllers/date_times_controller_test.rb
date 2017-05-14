require 'test_helper'

class DateTimesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get date_times_index_url
    assert_response :success
  end

end
