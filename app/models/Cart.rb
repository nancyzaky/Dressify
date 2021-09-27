class Cart < ActiveRecord::Base
  # attr_accessor :total
belongs_to :user
has_many :cartitems
has_many :items, through: :cartitems



def total_items
  tot = self.items.sum {|item| item.price.to_f * item.quantity.to_f}

 if self.discount
  tot = tot - (tot * 0.1)
 else
  tot
end
end
end