class Item < ActiveRecord::Base
  has_many :favorites
# has_many :users, through: :carts
end