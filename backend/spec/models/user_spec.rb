require 'rails_helper'

RSpec.describe User, type: :model do
  it "name, email, passwordが登録されていること" do
    user = User.new(name: "Test User", email: "test@example.com", password: "password")
    expect(user.save).to be_truthy
  end
end
