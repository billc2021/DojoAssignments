ActiveRecord::Schema.define(version: 20170308030101) do

  create_table "dojos", force: :cascade do |t|
    t.string   "branch"
    t.string   "street"
    t.string   "city"
    t.string   "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end