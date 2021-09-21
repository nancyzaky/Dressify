class User < ActiveRecord::Base
has_many  :favorites
has_many :carts
  enum status: {
    pending: 0,
    active: 1,
    archived: 2
  }


def total_items
   tot = 0
  cart =  self.carts.find_by(status:1)
  cart.items.each do |item|
    tot+= item.price.to_i
  end
  tot
end

 def increase_quantity(product)
  find_the_cart = self.carts.find do |cart|
    cart.status == 1
  end
  find_the_cart.map do |item|
    if item.name == product.name
      item.quantity+=1
    end
  end
 end
end