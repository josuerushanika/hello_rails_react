# frozen_string_literal: true

# Migration to create the greetings table

class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :sentence

      t.timestamps
    end
  end
end
