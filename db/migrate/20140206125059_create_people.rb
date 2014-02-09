class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :lastname
      t.string :skype
      t.string :phone
      t.string :email
      t.string :sex
      t.string :age

      t.timestamps
    end
  end
end
