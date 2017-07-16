"""一个Python测试文件"""
print('Hello,Python!')
str = '''asdfasf
asfafasdf'''
print(str)
person = [['111', '222', '333'], ['444', '555', '666']]
for per in person:
    for ppp in per:
        if ppp == '111':
            print('zengyun')
        else:
            print(ppp)


def out_char(one_char):
    """定义一个函数，输出传入的参数"""
    print('你好,' + one_char)


out_char('zengyun')
