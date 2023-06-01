FactoryBot.define do
  factory :user do
    name { "testuser1" }
    email {"testuser@example.com"}
    password {"password"}
  end
end