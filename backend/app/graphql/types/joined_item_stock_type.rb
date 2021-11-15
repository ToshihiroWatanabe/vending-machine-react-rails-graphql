module Types
  class JoinedItemStockType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :temperature, String, null: false
    field :price, Integer, null: false
    field :quantity, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
