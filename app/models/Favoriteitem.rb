class Favoriteitem < ActiveRecord::Base
belongs_to :item
belongs_to :favorite


end