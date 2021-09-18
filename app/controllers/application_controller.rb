require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  get "/user" do
  User.all.to_json(include: {shopping_sessions: {include: :cart}})
  end
  get "/" do
    'hi'
  end

  post "/user" do
  user_new=User.create(user_name:params[:user_name], password:params[:password])

    shop_session = ShoppingSession.create()
    shop_cart = Cart.create()
    user_new.shoppingsessions << shop_session
    user_new.shoppingsessions.cart << shop_cart

    user_new.to_json

  end

  get "/cart" do
    Cart.all.to_json
  end
  post '/cart' do
  end



end
