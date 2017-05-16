class CreateDashboards < ActiveRecord::Migration[5.0]
  def change
    create_table :dashboards do |t|
      t.string :branch
      t.string :street
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
