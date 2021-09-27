class Cartitem < ActiveRecord::Base
belongs_to :cart
belongs_to :item
has_many :users, through: :cartitems
end