class PasswordResetsController < ApplicationController
  before_action :set_user, only: [:edit, :update]
  before_action :valid_user, only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]

  def new
  end

  def edit
  end

  def create
    @user = User.find_by(email: params[:password_reset][:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
    else
      puts 'Email address not found'
    end

    flash[:info] = "Email sent to #{params[:password_reset][:email]} with password reset instructions"
    render json: {}
  end

  def update
    if params[:user][:password].empty?
      @user.errors.add(:password, "can't be empty")
      render json: { errors: @user.errors }
    elsif @user.update(user_params)
      reset_session
      log_in @user
      flash[:success] = 'Password has been reset.'
      render json: { id: @user.id }
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end

  def set_user
    @user = User.find_by(email: params[:email])
  end

  # Confirms a valid user.
  def valid_user
    render json: { errors: { invalid: ['user'] } } unless @user&.authenticated?(:reset, params[:id])
  end

  def check_expiration
    if @user.password_reset_expired?
      flash[:danger] = 'Password reset has expired.'
      render json: { errors: { password: ['reset expired'] } }
    end
  end
end
