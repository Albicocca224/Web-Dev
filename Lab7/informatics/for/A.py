a = int(input())
b = int(input())

even_numbers = []

for number in range(a, b + 1):
    if number % 2 == 0:
        even_numbers.append(number)

print(*even_numbers)