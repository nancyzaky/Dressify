class User < ActiveRecord::Base
has_many :shoppingsessions
has_many  :favorites
end