class BankAccount
	attr_reader :account_number, :checking_balance, :saving_balance, :interest_rate
	@@total_accounts = 0
	def self.total_accounts
		@@total_accounts
	end


	def initialize
		generate_account_number
		@checking_balance = 0
		@saving_balance = 0
		@@total_accounts += 1
		@interest_rate = '.01'
	end

	def checking_account_balance
		@checking_balance
	end

	def saving_account_balance
		@saving_balance
	end

	def deposit(amount)
		puts 'To deposit into your Checking press "c" your Savings press "s"'
		account = gets.chomp
		if account == "s"
			@saving_balance += amount
		elsif
			account == "c"
			@checking_balance += amount
		end
	end

	def withdrawl(amount)
		puts 'To withdraw from your Checking press "c" your Savings press "s"'
		account = gets.chomp
		if account == "s"
			@saving_balance -= amount
		elsif account == "c"
			@checking_balance -= amount
		end
	end

	def view_balance
		@total_balance = @saving_balance + @checking_balance
	end

	def account_information
		balance = view_balance
		puts "Account Number: #{@account_number} | Total Balance: #{balance} | Checking Acount Balance #{@checking_balance} | Savings Account Balance: #{@saving_balance} | Interest Rate: #{@interest_rate.to_f}%"
	end
		
	private
	def generate_account_number
		@account_number = rand(10000000)
	end
	
end

jason = BankAccount.new
jason.deposit(100)
jason.withdrawl(20)

jason.account_information
# puts jason.account_number
# puts jason.saving_balance
# puts jason.checking_balance
# puts jason.view_balance
# puts BankAccount.total_accounts