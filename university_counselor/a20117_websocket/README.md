

1.
安装python3.6 以上版本

2. 
安装pip3 
（如果网速慢 可以pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package  把some-package替换成自己的慢的包 )

3.
可选  可以不做（创建python3虚拟目录，隔绝不同版本库之间相互影响）
https://docs.python.org/zh-cn/3/tutorial/venv.html

4.
4.1
terminal底下进入工程目录下，在requirements.txt同级目录下运行：
pip install --upgrade -r requirements.txt

5.
在刚刚运行前4步的命令行下运行:
daphne -b 0.0.0.0 -p 80 server:application


6.
打开1个浏览器（比如chrome）访问：

http://127.0.0.1/

再开一个另外浏览器（比如firefox）访问同样页面：

http://127.0.0.1/

然后2个用户分别点击 ""

