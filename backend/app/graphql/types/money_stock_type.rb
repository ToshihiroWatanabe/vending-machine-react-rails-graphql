module Types
  class MoneyStockType < Types::BaseObject
    field :id, ID, null: false
    field :deposit, Integer, null: false
    field :deposit_10, Integer, null: false
    field :deposit_50, Integer, null: false
    field :deposit_100, Integer, null: false
    field :deposit_500, Integer, null: false
    field :deposit_1000, Integer, null: false
    field :stock_10, Integer, null: false
    field :stock_50, Integer, null: false
    field :stock_100, Integer, null: false
    field :stock_500, Integer, null: false
    field :stock_1000, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
