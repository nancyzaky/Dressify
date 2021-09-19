require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  get "/user" do
  User.all.to_json

  end
  get "/" do
  end

  #   t.string :name
      # t.string :url
      # t.string :price
      # t.integer :user_id
 get "./fav" do
 Favorite.all.to_json
 end

  post "/fav" do


  find = User.all.find_by(user_name:params[:user])
     binding.pry

  fav = Favorite.create(name:item.name, url: item.images[0].url)
  find.favorites << fav
  find.to_json
  end




  post "/user" do
  user_new=User.create(user_name:params[:user_name], password:params[:password])

    shop_session = Shoppingsession.create(user_id: user_new.id)

    user_new.shoppingsession = shop_session

    user_new.to_json

  end

  get "/cart" do
    Cart.all.to_json
  end
  post '/cart' do
  end



end
