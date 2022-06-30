class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      reset_session
      log_in user
      flash[:success] = 'Login successful'
      render json: user.id
    else
      # Create an error message.
      render json: { errors: { invalid: ["email/password combination"] }}, status: 422
    end
  end

  def destroy
    log_out if logged_in?
    flash[:success] = 'Logout successful'

    render json: {}
  end
end
