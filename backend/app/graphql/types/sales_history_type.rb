module Types
  class SalesHistoryType < Types::BaseObject
    field :id, ID, null: false
    field :purchase_time, GraphQL::Types::ISO8601DateTime, null: false
    field :product_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
