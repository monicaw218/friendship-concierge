json.extract! friend, :id, :first_name, :last_name, :nickname, :address_line_1, :address_line_2, :city, :state,
  :zip, :interests, :created_at, :updated_at
json.url friend_url(friend, format: :json)
