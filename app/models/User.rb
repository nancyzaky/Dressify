class User < ActiveRecord::Base
has_many  :favorites
has_many :carts
  enum status: {
    pending: 0,
    active: 1,
    archived: 2
  }

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