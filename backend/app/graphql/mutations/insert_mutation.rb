module Mutations
  class InsertMutation < GraphQL::Schema::RelayClassicMutation
    graphql_name 'Insert'

    # field :money_type, Integer, null: false
    field :result, Boolean, null: false

    # argument :money_type, Integer, required: true
  end

  def resolve
    # puts money_type.to_h.indifferent_access.transform_keys(&:underscore)
    # { money_type: args[:money_type] }
    { result: false }
  end
end
