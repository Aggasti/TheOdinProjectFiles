number = gets.chomp
sum = 0


sum_of_multiples_of_3_and_5 = Proc.new do |starting_number|
	while starting_number > 0
		starting_number = starting_number - 1
		if (starting_number % 3) == 0 or (starting_number % 5) == 0
			sum = sum + starting_number
		end	
	end
	sum
end

puts sum_of_multiples_of_3_and_5.call(number.to_i)