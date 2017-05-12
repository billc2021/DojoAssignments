## Associations

#### Setting up an Author (has many) Books ssociation

        class Author < ApplicationRecord
          has_many :books, dependent: :destroy
        end

        class Book < ApplicationRecord
          belongs_to :author
        end

#### Creating a new book
    @book = @author.books.create(published_at: Time.now)

#### Deleting an author and its books
    @author.destroy

### The Types of Associations
##### Rails supports six types of associations:
        * belongs_to
        * has_one
        * has_many
        * has_many :through
        * has_one :through
        * has_and_belongs_to_many     


## belongs_to

#### The belongs_to association sets up a one-to-one connection with another model

    Example - assign one book to one author:

        class Book < ApplicationRecord
            belongs_to :author (belongs_to associations must use the singular term.)
        end

## has_one

#### The has_one association sets up a one-to-one connection with another model

    This association indicates that each instance of a model contains or possesses one instance of another model

    Example - assign one account to one supplier

        class Supplier < ApplicationRecord
            has_one :account
        end

## has_many

#### The has_many association indicates a one-to-many

    Example - assign one author to zero or more books:

        class Author < ApplicationRecord
            has_many :books (the name of the other model is pluralized when declaring a has_many association)
        end

## has_many :through

#### A has_many :through association is often used to set up a many-to-many connection with another model.

    Example - assign physicians and patients through appointments

        class Physician < ApplicationRecord
            has_many :appointments
            has_many :patients, through: :appointments
        end

        class Appointment < ApplicationRecord
            belongs_to :physicians
            belongs_to :patient
        end

        class Patient < ApplicationRecord
            has_many :appointments
            has_many :physicians, through: :appointments
        end

## has_one :through

#### A has_one :through association setups up a one-to-one connection with another model.

    This association indicates that the declaring model can be matched with one instance of another model by proceeding through a third model.

    Example - A supplier has one account and that account has one account history

        class Supplier < ApplicationRecord
          has_one :account
          has_one :account_history, through: :account
        end

        class Account < ApplicationRecord
          belongs_to :supplier
          has_one :account_history
        end

        class AccountHistory < ApplicationRecord
          belongs_to :account
        end

## has_and_belongs_to_many

#### A has_and_belongs_to_many association creates a direct many-to-many connection with another model, with no intervening model.

    Example - Each assembly has many parts and each part appears in many assemblies

        class Assembly < ApplicationRecord
            has_and_belongs_to_many :parts
        end

        class Part < ApplicationRecord
            has_and_belongs_to_many :assemblies 
        end
