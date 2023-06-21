class Task < ApplicationRecord
  belongs_to :user

  enum :status, [ :INCOMPLETE, :COMPLETED ]

  validates :name, {
    length: { minimum: 5, maximum: 23 },
    presence: true
  }

  validates :description, {
    length: { minimum: 20 },
    presence: true
  }


end
