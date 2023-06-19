class Task < ApplicationRecord
  belongs_to :user

  enum :status, [ :INCOMPLETE, :COMPLETED ]

  validates :name, {
    length: { minimum: 1, maximum: 20 },
    presence: true
  }

  validates :description, {
    length: { minimum: 2 },
    presence: true
  }


end
