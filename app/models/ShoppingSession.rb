class ShoppingSession < ActiveRecord::Base
belongs_to :user

  enum status: {
    pending: 0,
    active: 1,
    archived: 2
  }
end

# users

# shopping_sessions (carts)
#  - complete (boolean)

# item_shopping_sessions
#   -item id
#   - shopping session id
#   - quantity

# items

# session.create_user