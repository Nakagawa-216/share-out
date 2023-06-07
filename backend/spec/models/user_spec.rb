require 'rails_helper'

RSpec.describe User, type: :model do
  # it "name, email, passwordが登録されていること" do
  #   user = User.new(name: "Test User", email: "test@example.com", password: "password")
  #   expect(user.save).to be_truthy
  # end
  it "Userモデルをnewした時、nilではないこと" do
    expect(User.new).not_to eq(nil)
  end 

  it "emailがなければ無効であること" do
    @user = User.new(email: nil)
    expect(@user.valid?).to eq(false)
  end

end
