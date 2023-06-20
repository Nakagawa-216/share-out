class Api::V1::UsersController < ApplicationController
  # before_action :authenticate_user!

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: { errors: current_user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :id)
  end
end
