class RoomsController < ApplicationController
  def show
    @messages = Message.all #to get all messages in db and pass them to rooms/show.erb
  end
end
