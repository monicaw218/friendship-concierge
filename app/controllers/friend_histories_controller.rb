class FriendHistoriesController < ApplicationController

	def index
	end

	def new
	end

	def create
		begin
    	@friendHistory = FriendHistory.new(friend_history_params)

	    @friendHistory.save
    	flash[:success] = 'Friend Update saved!'
      render json: @friendHistory
    rescue
    	flash[:danger] = 'No friend with that name. Want to create one?'
    	render :json => { :errors => @friendHistory.errors.full_messages }, :status => 422
    end
	end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_friend
      @friend = FriendHistory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def friend_history_params
      params[:friend_history].permit(:friend_id, :alternate_update_time, :description)
    end
end
