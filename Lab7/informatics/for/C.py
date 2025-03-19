import math

a = int(input())
b = int(input())

perfect_squares = []

start = math.ceil(math.sqrt(a))
end = math.floor(math.sqrt(b))

for i in range(start, end + 1):
    square = i * i
    if a <= square <= b:
        perfect_squares.append(square)

if perfect_squares:
    print(*perfect_squares)