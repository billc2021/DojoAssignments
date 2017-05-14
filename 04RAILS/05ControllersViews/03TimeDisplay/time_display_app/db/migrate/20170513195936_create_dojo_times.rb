class CreateDojoTimes < ActiveRecord::Migration[5.0]
  def change
    create_table :dojo_times do |t|
      t.datetime :dt

      t.timestamps
    end
  end
end
