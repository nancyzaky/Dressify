require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  get "/user" do
   User.all.to_json(include: :carts)
  end


  post '/items' do
     find_item =  Item.find_by(url:params[:url])
    if find_item == nil
    Item.create(name:params[:name], url:params[:url], price:params[:price], category:params[:category])
    end
    Item.all.to_json
  end
get "/items" do
   Item.all.to_json
end


get "/cat/:word" do
items = Item.where(category: params[:word]).to_json
end
get "/item/:id" do
  Item.find(params[:id]).to_json
end
 get "/user/:user_name" do
 find_user = User.find_by(user_name:params[:user_name])
 find_user.to_json(include: :favorites)
 end

 get "/userid/:id" do
 find_user = User.find(params[:id])
 find_user.to_json(include: :favorites)
 end

post "/user" do
  find = User.find_by(user_name:params[:user_name])
  if find == nil
  user_new=User.create(user_name:params[:user_name], password:params[:password])
  cart_new = Cart.create(user_id:user_new.id)
  # user_new.carts <<cart_new
  User.allname << user_new
  user_new.to_json(include: :carts)


  end
  end

  # ////////////

post "/user/:userid/cart" do
  find_user = User.find(params[:userid])
  cart_active = find_user.carts.find_by(status:1)
  find_item = Item.find(params[:id])
  if !cart_active

    cart_active = Cart.create(user_id:find_user.id)

end
#  if !find_item
#   find_item = Item.create(name:params[:name], url:params[:url], price:params[:price])
#  end

  cart_item_new = Cartitem.create(item_id:find_item.id, cart_id: cart_active.id)
  cart_item_new.update(quantity:1)

  find_item.to_json

end


get "/user/:id/cart" do
   find_carts = User.find(params[:id])
   cart_active = find_carts.carts.find_by(status:1)
   cart_active.to_json(include: :items)
end
 delete "/user/:userid/cart/:id" do
 find_user = User.find(params[:userid])
 cart_items = find_user.carts.find_by(status:1)
  item = cart_items.cartitems.find_by(item_id:params[:id])
# item = find_user.items.find(params[:id])
 item.destroy
item.to_json
end

 get "/user/:id/favorite" do
 find_fav = User.find(params[:id])

 find_fav.favorite_items.to_json
 end

 delete "/user/:userid/favorite/:id" do
 find_fav = User.find(params[:userid])
 fav_item = find_fav.favorite_items.find(params[:id])
 fav_item.destroy
 fav_item.to_json
end

# get "/user/:user_name/cart/:id" do
# find_user = User.find_by(user_name:params[:user_name])
# cart_active = find_user.carts.find_by(status:1)
# item_to_repeat = cart_active.items.find(params[:id])
# # item_to_repeat.update(quantity: quantity+=1)
# # find_user.increase_quantity
# item_to_repeat.to_json
# end
get"/cartitem"do
Cartitem.all.to_json
end
patch"/user/:id/discount" do
  find_user = User.find(params[:id])
  cart_active = find_user.carts.find_by(status:1)

 cart_active.update(discount:params[:discount])
result = cart_active.total_items
result.to_json

end

  post "/user/:userid/favorite" do

  find_user = User.find(params[:userid])

  find_item = Item.find(params[:id])
  fav_new = Favorite.create(user_id:find_user.id, item_id:find_item.id)

  find_item.to_json
  end



patch "/user/:id/cart/:itemid" do
find_user = User.find(params[:id])
 cart_active = find_user.carts.find_by(status:1)

item_to_repeat = cart_active.cartitems.find_by(item_id:params[:itemid])

item_to_repeat.update(quantity: params[:quantity])
item_to_repeat.to_json
end


get "/fav" do
   Favorite.all.to_json
end

# get '/user/items/:id' do
#   user = User.find(params[:id])
#   user.favorite_items.to_json
# end

get "/cart" do
Cart.where(status:1).to_json
end
get "/outfit" do
  Outfit.all.to_json
end

get'/bestsellers' do
result = Cart.joins(:items).group(:url).order("count_id DESC").limit(7).count(:id)
result.to_json
end


# # Shoppingsession
# get "/cart" do
#   Cart.all.to_json
# end
patch "/user/:id/checkout" do
user = User.find(params[:id])
 cart_active = user.carts.find_by(status:1)
 cart_active.update(status:params[:status])
 cart_new = Cart.create(user_id:user.id)
cart_active.to_json
end

get "/total/:id" do
user = User.find(params[:id])

 cart_active = user.carts.find_by(status:1)
#  sum = 0
#   cart_active.map do |item|
#     find_item = Item.find_by(id:item.item_id)
#     sum+= item.quantity.to_f * find_item.price
#   end

 result = cart_active.total_items
result.to_json
end


get"/cartitems" do
  Cartitem.all.to_json(include: :item)
end

get "/user/:id/archived" do
user = User.find(params[:id])
user_carts = user.carts.where(status: 2)
user_carts.to_json(include: :items)
end

post "/user/:id/pic" do
  user = User.find(params[:id])
  user_carts = user.carts.where(status: 1)
  pic = Item.find_by(url:params[:url])
  cart_item_new = Cartitem.create(user_id:params[:id], item_id:pic.id)
  user_carts<<cart_item_new
  cart_item_new.to_json

end
get "/user/:id/archived/desc" do
user = User.find(params[:id])
user_carts = user.carts.where(status: 2)
user_carts.order("created_at DESC").to_json(include: :items)
end


post "/user/:id/outfit" do
user = User.find(params[:id])
item = Item.find_by(url:params[:url])
drop = Draganddrop.create(user_id:params[:id], item_id:item.id)
drop.to_json
end

get "/user/:id/outfit" do
  user = User.find(params[:id])
   user.draganddrops.to_json(include: :items_in_drop)
end
end
