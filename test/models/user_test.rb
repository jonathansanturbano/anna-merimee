require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "Only one user" do
    assert_equal 1, User.count, "Should only be one user"
  end

  test "Can't create another user" do
    second_user = User.new(email: "john@example.com", password: "123456", password_confirmation: "123456")
    assert_not second_user.save, "Should not be able to have a second user"
  end
end
