numbers = list(map(int, input().split()))

max_value = max(numbers)

max_index = numbers.index(max_value)

print(max_value, max_index)