a = int(input())
b = int(input())
c = int(input())
d = int(input())

result = []

for number in range(a, b + 1):
    if number % d == c:
        result.append(number)

if result:
    print(*result)