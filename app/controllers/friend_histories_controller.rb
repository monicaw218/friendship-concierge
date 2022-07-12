class FriendHistoriesController < ApplicationController
  before_action :set_friend_history, only: [:destroy]

  def index
  end

  def new
  end

  def create
    @friend_history = FriendHistory.new(friend_history_params)

    @friend_history.save
    flash[:success] = 'Friend Update saved!'
    render json: @friend_history
  rescue StandardError
    flash[:danger] = 'No friend with that name. Want to create one?'
    render json: { errors: @friend_history.errors.full_messages }, status: :unprocessable_entity
  end

  def destroy
    @friend_history.destroy
    flash[:success] = 'Friend Update deleted'

    render json: { notice: 'Friend Update was successfully removed.' }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_friend_history
    @friend_history = FriendHistory.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def friend_history_params
    params[:friend_history].permit(:friend_id, :alternate_update_time, :description)
  end
end
