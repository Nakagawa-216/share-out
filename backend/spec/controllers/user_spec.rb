require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  # 遅延評価される変数をlet()で定義。itブロックで何度呼び出されても一度だけ評価される。
  # :userというfactoryを使用してUserオブジェクトをデータベースに保存
  let(:user) { create(:user) }

  describe 'Get #show' do
    before do
      sign_in user
    end
    it 'リクエストに対して成功レスポンスを返すこと' do
      get :show
      expect(response.body).to eq(user.to_json)
      expect(response).to have_http_status(:ok)
    end
  end
end