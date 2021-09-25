class User < ActiveRecord::Base
has_many :carts
has_many :items, through: :cartitems
has_many :favorites, through: :favoriteitems
  enum status: {
    active: 1,
    archived: 2
  }
# class User < ActiveRecord::Base
#   has_many :favorites
#   has_many :favorite_items, through: :favorites, source: :item
#   has_many :carts
#   has_many :items_in_carts, through: :carts, source: :item
# end


# class Item < ActiveRecord::Base
#   has_many :favorites
#   has_many :users, through: :favorites
# end

# class Cart < ActiveRecord::Base
#   belongs_to :user
#   has_many: :cart_items
#   has_many: :items, through: :cart_items
# end

# class CartItems < ActiveRecord::Base
#   belongs_to :item
#   belongs_to :cart
# end
#

def total_items
   tot = 0
  cart =  self.carts.find_by(status:1)
  cart.items.each do |item|
    tot+= (item.price.to_f) * (item.quantity.to_f)
  end

 if cart.discount == true
  tot = tot - (tot * 0.1)
 else
  tot
end
end

def self.best_seller
  fav_hash = Hash.new(0)
 self.all.each do |person|
    person.favorites.each do |item|
    fav_hash[item] += 1
    end
  end
  fav_hash
end


#  def increase_quantity(product)
#   find_the_cart = self.carts.find do |cart|
#     cart.status == 1
#   end
#   find_the_cart.map do |item|
#     if item.name == product.name
#       item.quantity+=1
#     end
#   end
#  end
end