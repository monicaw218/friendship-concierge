class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
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
  end
end
