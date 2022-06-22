class Api::V1::FriendsController < ApplicationController
  before_action :set_friend, only: [:show, :edit, :update, :destroy]

  # GET /friends
  # GET /friends.json
  def index
    @friends = Friend.all.order(id: :desc)
    render json: @friends
  end

  # GET /friends/1
  # GET /friends/1.json
  def show
    if @friend
      render json: @friend
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
    @friend = Friend.new(friend_params)


    if @friend.save
      render json: @friend
    else
      render :json => { :errors => @friend.errors.full_messages }, :status => 422
    end
  end

  # PATCH/PUT /friends/1
  # PATCH/PUT /friends/1.json
  def update
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
      params[:friend].permit(:first_name, :last_name, :age, :interests)
    end
end

