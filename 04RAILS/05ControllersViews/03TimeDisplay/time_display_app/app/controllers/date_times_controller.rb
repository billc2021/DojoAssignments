class DateTimesController < ApplicationController
  def index
    @date = DojoTime.new
    @date.save
  end
end
