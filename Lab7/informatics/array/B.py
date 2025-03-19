numbers = input().split()

even_elements = [num for num in numbers if int(num) % 2 == 0]

print(" ".join(even_elements))