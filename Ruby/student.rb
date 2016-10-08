class Student
	attr_accessor :first_name, :last_name, :primary_phone_number

	def introduction(target)
		puts "Hi #{target}, I'm #{first_name}!"
	end

	def favorite_number
		7
	end
end

oliver = Student.new
oliver.first_name = "Oliver"
puts "#{oliver.first_name} favorite number is #{oliver.favorite_number}."