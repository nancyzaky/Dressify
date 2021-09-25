class Favorite < ActiveRecord::Base
  belongs_to :user
  has_many :favoriteitems
  has_many :items, through: :favoriteitems
end