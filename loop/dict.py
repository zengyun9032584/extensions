from math import sqrt
dicts = {'name': 'zengyun', 'age': 18}
for key, value in dicts.items():
    print(key, '_', value)
arr1 = ['zengyun', 'xueqi']
arr2 = [25, 23]
for name, age in zip(arr1, arr2):
    print(name, age, end='\n')

str1 = 'zengyuneeennneeennn'
print(str1.replace('e','m'))
str2 = 'zengyun'
if str2 == 'zzzz':
    print('zzzz')
elif str2 == 'bbbb':
    pass
elif str2 == 'cccc':
    print('cccc')
else:
    print('zengyun')
# exec('print(sqrt(4))')

