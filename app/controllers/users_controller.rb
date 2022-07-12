class UsersController < ApplicationController
  before_action :set_user, only: :show

  def index
  end

  def show
  end

  def new
    @user = User.new
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_digest)
  end
end
