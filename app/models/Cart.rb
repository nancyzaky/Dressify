class Cart < ActiveRecord::Base
belongs_to :shoppingsession
has_many :items
end