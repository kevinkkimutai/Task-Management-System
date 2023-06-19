class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.string :due_date
      t.belongs_to :user_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
