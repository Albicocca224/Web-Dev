numbers = input().split()

positive_count = sum(1 for num in numbers if int(num) > 0)

print(positive_count)