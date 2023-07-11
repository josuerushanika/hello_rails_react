class GreetingsController < ApplicationController
    def index
        @greeting = Greeting.order('RANDOM()').first

        respond_to do |format|
            format.html
            format.json { render json: @greeting }
        end     
    end
end
