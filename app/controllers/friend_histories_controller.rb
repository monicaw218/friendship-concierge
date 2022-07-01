class FriendHistoriesController < ApplicationController

	def index
	end

	def new
	end

	def create
		begin
			ui_params = friend_history_params
			first_name = ui_params.delete(:first_name)
			last_name = ui_params.delete(:last_name)
			friend = Friend.find_by(first_name: first_name, last_name: last_name, user_id: current_user.id)

	    ui_params[:friend_id] = friend.id
    	@friendHistory = FriendHistory.new(ui_params)

	    @friendHistory.save
    	flash[:success] = 'Friend Update saved!'
      render json: @friendHistory
    rescue
    	flash[:danger] = 'No friend with that name. Want to create one?'
    	message = if @friendHistory&.errors
					    		@friendHistory.errors.full_messages
					  		else
									"No friend with name #{friend_history_params[:first_name]} for this user"
								end
    	render :json => { :errors => message }, :status => 422
    end
	end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_friend
      @friend = FriendHistory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def friend_history_params
      params[:friend_history].permit(:first_name, :last_name, :alternate_update_time, :description)
    end
end
