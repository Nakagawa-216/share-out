class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts.as_json(include: { user: { only: [:id, :name] }})
  end

  def show
    @post = Post.find(params[:id])
    render json: @post 
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.save
  end

  private
    def post_params
      params.require(:post).permit(:title, :body)
    end
end
