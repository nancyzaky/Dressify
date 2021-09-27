class User < ActiveRecord::Base
  attr_accessor :names
has_many :carts

# has_many :items_in_cart, through: :carts, through: :cartitems, source: :item
has_many :favorites
has_many :favorite_items, through: :favorites, source: :item
  enum status: {
    active: 1,
    archived: 2
  }

@@names=[]

def self.allname
@@names
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