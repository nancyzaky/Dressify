require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  get "/user" do
  User.all.to_json(include: :favorites)

  end


 get "/user/:user_name" do
 find_fav = User.find_by(user_name:params[:user_name])
 find_fav.to_json(include: :favorites)
 end


 get "/user/:user_name/fav" do
 find_fav = User.find_by(user_name:params[:user_name])
 find_fav.favorites.to_json
 end

 delete "/user/:user_name/fav/:id" do
 find_fav = User.find_by(user_name:params[:user_name])
 fav_item = find_fav.favorites.find(params[:id])
 fav_item.destroy
 fav_item.to_json
end


  post "/fav" do
  find = User.all.find_by(user_name:params[:user])
  fav = Favorite.create(name:params[:name], url: params[:url], price:params[:price], user_id: find.id)
  fav.to_json
  end


get "/fav" do
  Favorite.all.to_json
end



  post "/user" do
  find = User.find_by(user_name:params[:user_name])
  if find == nil

  user_new=User.create(user_name:params[:user_name], password:params[:password])

    shop_session = Shoppingsession.create(user_id: user_new.id)

    user_new.shoppingsession = shop_session

    user_new.to_json
  end
  end

  get "/cart" do
    Cart.all.to_json
  end
  post '/cart' do
  end



end
