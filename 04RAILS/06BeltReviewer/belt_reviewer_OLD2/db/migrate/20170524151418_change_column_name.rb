class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :reviews, :rating, :rating
  end
end
