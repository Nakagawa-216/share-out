require 'rails_helper'

RSpec.describe "Users", type: :request do
  let(:user) { create(:user) }

  describe "GET /users/:id" do
    it "return userpage response" do
      get api_v1_user_path(user.id)

      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)

      binding.irb

      expect(json["name"]).to eq(user.name)
      expect(json["email"]).to eq(user.email)
    end
  end
end