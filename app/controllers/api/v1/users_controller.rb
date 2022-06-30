class Api::V1::UsersController < ApplicationController
 before_action :set_user, only: [:edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all.order(id: :desc)
    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
    if @user
      render json: @user
    else
      render json: @user.errors
    end
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    if @user.save
      flash[:success] = "Welcome to the Friendship Concierge!"
      render json: @user
    else
      render json: { errors: @user.errors }, status: 422
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy

    render json: { notice: 'User was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params[:user].permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
