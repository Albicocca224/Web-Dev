def swap_case(s):
    string = ""
    for i in s:
        if i.isupper() == True:
            string+=(i.lower())
        else:
            string+=(i.upper())
    return string
s = input()
result = swap_case(s)
print(result)