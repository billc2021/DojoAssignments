class CreateSurveyForms < ActiveRecord::Migration[5.0]
  def change
    create_table :survey_forms do |t|
      t.string :name
      t.string :location
      t.string :language
      t.string :comment

      t.timestamps
    end
  end
end
