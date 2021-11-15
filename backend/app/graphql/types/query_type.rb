module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :item_stocks, [Types::ItemStockType], null: false

    def item_stocks
      ItemStock.all
    end

    field :money_stock, Types::MoneyStockType, null: false

    def money_stock
      MoneyStock.first
    end

    field :products, [Types::ProductType], null: false

    def products
      Product.all
    end

    field :sales_histories, [Types::SalesHistoryType], null: false

    def sales_histories
      SalesHistory.all
    end

    field :temperatures, [Types::TemperatureType], null: false

    def temperatures
      Temperature.all
    end

    field :vendors, [Types::VendorType], null: false

    def vendors
      Vendor.all
    end

    # TODO: remove me
    field :test_field, String, null: false,
                               description: 'An example field added by the generator'
    def test_field
      'Hello World!'
    end
  end
end
