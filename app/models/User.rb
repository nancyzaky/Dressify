class User < ActiveRecord::Base
has_many :carts
has_many :cartitems, through: :carts
has_many :items_in_cart, through: :cartitems, source: :item
has_many :favorites
has_many :favorite_items, through: :favorites, source: :item
# has_many :items_in_drop, through: :draganddrops, source: :item
  enum status: {
    active: 1,
    archived: 2
  }

@@names=[]

def self.allname
@@names
end



# def self.best_seller
#   fav_hash = Hash.new(0)
#  self.all.each do |person|
#     person.favorites.each do |item|
#     fav_hash[item] += 1
#     end
#   end
#   fav_hash
# end


end