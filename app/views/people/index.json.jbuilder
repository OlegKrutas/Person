json.array!(@people) do |person|
  json.extract! person, :id, :name, :lastname, :skype, :phone, :email, :sex, :age
  json.url person_url(person, format: :json)
end
