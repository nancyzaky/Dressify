class Outfit < ActiveRecord::Base
belongs_to :user
has_many :items
 enum status:{
  active: 1,
    archived: 2
  }
end