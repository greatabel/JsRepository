
1.
安装python3.6 以上版本

2. 
安装pip3 
（如果网速慢 可以pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package  把some-package替换成自己的慢的包 )

3.
可选  可以不做（创建python3虚拟目录，隔绝不同版本库之间相互影响）
https://docs.python.org/zh-cn/3/tutorial/venv.html


4.

terminal底下进入工程目录下，在requirements.txt同级目录下运行：
pip install --upgrade -r requirements.txt


5.

新开另一个命令行窗口，在a20001sql_injection_platform目录下执行:
python3 i4wsgi.py



6.
浏览器访问：
http://localhost:8000/
访问学校tour

7.
（可选)
http://localhost:8000/home
已经注册好的管理员账号 可以直接登录：
管理员
username: greatabel1@126.com 
password: abel
你也可以自己注册和登录






