class Api::V1::FriendsController < ApplicationController
  before_action :set_friend, only: [:show, :edit, :update, :destroy]

  # GET /friends
  # GET /friends.json
  def index
    @friends = Friend.where(user_id: current_user.id).order_by_last_name
    render json: @friends
  end

  # GET /friends/1
  # GET /friends/1.json
  def show
    if @friend
      render json: { friend: @friend, feed: @friend.friend_histories }
    else
      render json: @friend.errors
    end
  end

  # GET /friends/new
  def new
    @friend = Friend.new
  end

  # GET /friends/1/edit
  def edit
  end

  # POST /friends
  # POST /friends.json
  def create
    ui_params = friend_params
    ui_params[:user_id] = current_user.id
    @friend = Friend.new(ui_params)

    if @friend.save
      render json: @friend
    else
      render json: { errors: @friend.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /friends/1
  # PATCH/PUT /friends/1.json
  def update
    @friend.update(friend_params)

    if @friend.save
      render json: @friend
    else
      render json: { errors: @friend.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /friends/1
  # DELETE /friends/1.json
  def destroy
    @friend.destroy

    render json: { notice: 'Friend was successfully removed.' }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_friend
    @friend = Friend.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def friend_params
    params[:friend].permit(:first_name, :last_name, :interests, :birthday)
  end
end
