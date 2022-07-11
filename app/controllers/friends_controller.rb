class FriendsController < ApplicationController
  before_action :set_friend, only: %i[show edit update destroy]

  def index
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_friend
    @friend = Friend.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def friend_params
    params.require(:friend).permit(:first_name, :last_name, :age, :interests)
  end
end
