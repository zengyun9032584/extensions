#!/usr/bin/python3
'''计算前N项和'''
while True:
    try:
        num = int(input('请输入一个整数计算总和:'))
        total, index = 0, 0
        # while index <= num:
        #     total += index
        #     index += 1
        for number in range(1,num+1):
            total += number
        print('前', num, "项和为：", total)
    except ValueError:
        print("数据输入异常，请重新输入!")
