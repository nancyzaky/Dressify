class Cart < ActiveRecord::Base
  # attr_accessor :total
belongs_to :user
has_many :cartitems
has_many :items, through: :cartitems

  enum status: {
    active: 1,
    archived: 2
  }

def total_items
  tot = 0
   self.cartitems.each do |cartitem|
    tot+= cartitem.quantity.to_f * cartitem.item.price.to_f
   end
 if self.discount
  tot = tot - (tot * 0.1)
 else
  tot
end
end



end