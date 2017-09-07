import sys
#从python文件导入变量
from  variable import SYSTEM,PUBLISH
print('获取命令行参数')
# print(dir(sys))
for param in sys.argv:
    print(param)
print(SYSTEM,PUBLISH)