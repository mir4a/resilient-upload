require "test_helper"

class OfflineControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get offline_index_url
    assert_response :success
  end
end
