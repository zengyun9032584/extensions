while True:
    try:
        number = eval(input('请输入计算表达式，用回车键结束\n'))
        print('计算结果为：',number)
    except NameError:
        print("表达式输入结果异常，请重新输入!")
