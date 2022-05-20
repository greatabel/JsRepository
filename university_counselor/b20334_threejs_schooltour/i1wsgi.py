"""App entry point."""
import os
import sys
import json

import flask_login
from flask_cors import CORS

from flask import send_from_directory
from flask import request
from flask import url_for
from flask import redirect, session
from flask import Blueprint, render_template as rt
from flask_sqlalchemy import SQLAlchemy

from flask import Flask, Response
from flask import jsonify
from flask_cors import CORS
from movie import create_app

# import es_search


import pandas as pd
import csv
import time



app = create_app()
app.secret_key = "ABCabc123"
app.debug = True
CORS(app)
# --- total requirement ----


# ---start  数据库 ---
#  如果想更换为mysql/postgresql 可以修改这里
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///campus_data.db"

db = SQLAlchemy(app)

last_upload_filename = None
# --- end   数据库 ---
admin_list = ["admin@126.com", "greatabel1@126.com"]


class User(db.Model):
    """Create user table"""

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(80))
    nickname = db.Column(db.String(80))
    school_class = db.Column(db.String(80))
    school_grade = db.Column(db.String(80))

    def __init__(self, username, password):
        self.username = username
        self.password = password


class Blog(db.Model):
    """
    ppt数据模型
    example:
            "name": "弘远楼B区",        
            "line": "共五层，39间教室，39间在用",      
            "f1": "教室（共7间教室）",  
            "f2": "教学办公区（共9间教室）",   
            "f3": "教学办公区（共9间教室）",   
            "f4": "教学办公区（共8间教室）",   
            "f5": "教室（共6间教室）",  
    """

    # 主键ID
    id = db.Column(db.Integer, primary_key=True)
    # ppt标题
    name = db.Column(db.String(100))
    line = db.Column(db.String(100))
    f1 = db.Column(db.String(100))
    f2 = db.Column(db.String(100))
    f3 = db.Column(db.String(100))
    f4 = db.Column(db.String(100))
    f5 = db.Column(db.String(100))


    def __init__(self, name, line, f1, f2, f3, f4, f5):
        """
        初始化方法
        """
        self.name = name
        self.line = line
        self.f1 = f1
        self.f2 = f2
        self.f3 = f3
        self.f4 = f4
        self.f5 = f5



### -------------start of home
def replace_html_tag(text, word):
    new_word = '<font color="red">' + word + "</font>"
    len_w = len(word)
    len_t = len(text)
    for i in range(len_t - len_w, -1, -1):
        if text[i : i + len_w] == word:
            text = text[:i] + new_word + text[i + len_w :]
    return text


class PageResult:
    def __init__(self, data, page=1, number=2):
        self.__dict__ = dict(zip(["data", "page", "number"], [data, page, number]))
        self.full_listing = [
            self.data[i : i + number] for i in range(0, len(self.data), number)
        ]
        self.totalpage = len(data) // number
        print("totalpage=", self.totalpage)

    def __iter__(self):
        if self.page - 1 < len(self.full_listing):
            for i in self.full_listing[self.page - 1]:
                yield i
        else:
            return None

    def __repr__(self):  # used for page linking
        return "/home/{}".format(self.page + 1)  # view the next page


@app.route("/home/<int:pagenum>", methods=["GET"])
@app.route("/home", methods=["GET", "POST"])
def home(pagenum=1):

    print("home " * 10)
    keyword = ""
    blogs = Blog.query.all()
    user = None
    if "userid" in session:
        user = User.query.filter_by(id=session["userid"]).first()
    else:
        print("userid not in session")
    print("in home", user, "blogs=", len(blogs), "*" * 20)
    if request.method == "POST":
        """"""

    return rt(
        "home.html",
        listing=PageResult(blogs, pagenum),
        user=user,
        realtime_whether=keyword + "实时天气:晴朗",
    )


@app.route("/blogs/create", methods=["GET", "POST"])
def create_blog():
    """
    创建大楼信息文章
    """
    if request.method == "GET":
        # 如果是GET请求，则渲染创建页面
        return rt("create_blog.html")
    else:
        # 从表单请求体中获取请求数据
        name = request.form["name"]
        line = request.form["line"]
        f1 = request.form["f1"]
        f2 = request.form["f2"]
        f3 = request.form["f3"]
        f4 = request.form["f4"]
        f5 = request.form["f5"]

        # 创建一个ppt对象
        blog = Blog(name=name, line=line,f1=f1, f2=f2,
                f3=f3,f4=f4,f5=f5)
        db.session.add(blog)
        # 必须提交才能生效
        db.session.commit()
        # 创建完成之后重定向到ppt列表页面
        return redirect("/blogs")


@app.route("/blogs", methods=["GET"])
def list_notes():
    """
    查询大楼信息列表
    """
    blogs = Blog.query.all()
    # 渲染ppt列表页面目标文件，传入blogs参数
    return rt("list_blogs.html", blogs=blogs)


@app.route("/blogs/update/<id>", methods=["GET", "POST"])
def update_note(id):
    """
    更新大楼信息
    """
    if request.method == "GET":
        # 根据ID查询ppt详情
        blog = Blog.query.filter_by(id=id).first_or_404()
        # 渲染修改笔记页面HTML模板
        return rt("update_blog.html", blog=blog)
    else:
        # 获取请求的ppt标题和正文
        name = request.form["name"]
        line = request.form["line"]
        f1 = request.form["f1"]
        f2 = request.form["f2"]
        f3 = request.form["f3"]
        f4 = request.form["f4"]
        f5 = request.form["f5"]
        # 更新ppt
        blog = Blog.query.filter_by(id=id).update({"name": name, "line": line,
            "f1":f1, "f2":f2, "f3": f3, "f4":f4, "f5":f5})
        # 提交才能生效
        db.session.commit()
        # 修改完成之后重定向到ppt详情页面
        return redirect("/blogs/{id}".format(id=id))


@app.route("/blogs/<id>", methods=["GET", "DELETE"])
def query_note(id):
    """
    查询大楼信息详情、删除ppt
    """
    if request.method == "GET":
        # 到数据库查询ppt详情
        blog = Blog.query.filter_by(id=id).first_or_404()
        print(id, blog, "in query_blog", "@" * 20)
        # 渲染ppt详情页面
        return rt("query_blog.html", blog=blog)
    else:
        # 删除ppt
        blog = Blog.query.filter_by(id=id).delete()
        # 提交才能生效
        db.session.commit()
        # 返回204正常响应，否则页面ajax会报错
        return "", 204


### -------------end of home
# @app.route("/recommend", methods=["GET", "DELETE"])
# def recommend():
#     """
#     查询ppt item 推荐
#     """
#     if request.method == "GET":
#         choosed = recommandation.main()
#         print("给予离线交互数据进行协同推荐")
#         print(choosed, "#" * 20)
#         print("给予离线交互数据进行协同推荐")
#         return rt("recommend.html", choosed=choosed)

### -------------start of profile


@app.route("/profile", methods=["GET", "DELETE"])
def query_profile():
    """
    查询ppt详情、删除ppt
    """

    id = session["userid"]

    if request.method == "GET":

        # 到数据库查询ppt详情
        user = User.query.filter_by(id=id).first_or_404()
        print(user.username, user.password, "#" * 5)
        # 渲染ppt详情页面
        return rt("profile.html", user=user)
    else:
        # 删除ppt
        user = User.query.filter_by(id=id).delete()
        # 提交才能生效
        db.session.commit()
        # 返回204正常响应，否则页面ajax会报错
        return "", 204


@app.route("/profiles/update/<id>", methods=["GET", "POST"])
def update_profile(id):
    """
    更新ppt
    """
    if request.method == "GET":
        # 根据ID查询ppt详情
        user = User.query.filter_by(id=id).first_or_404()
        # 渲染修改笔记页面HTML模板
        return rt("update_profile.html", user=user)
    else:
        # 获取请求的ppt标题和正文
        password = request.form["password"]
        nickname = request.form["nickname"]
        school_class = request.form["school_class"]
        school_grade = request.form["school_grade"]

        # 更新ppt
        user = User.query.filter_by(id=id).update(
            {
                "password": password,
                "nickname": nickname,
                "school_class": school_class,
                "school_grade": school_grade,
            }
        )
        # 提交才能生效
        db.session.commit()
        # 修改完成之后重定向到ppt详情页面
        return redirect("/profile")


### -------------end of profile


# @app.route("/course/<id>", methods=["GET"])
# def course_home(id):
#     """
#     查询ppt详情、删除ppt
#     """
#     if request.method == "GET":
#         # 到数据库查询ppt详情
#         blog = Blog.query.filter_by(id=id).first_or_404()
#         teacherWork = TeacherWork.query.filter_by(course_id=id).first()
#         print(id, blog, "in query_blog", "@" * 20)
#         # 渲染ppt详情页面
#         return rt("course.html", blog=blog, teacherWork=teacherWork)
#     else:
#         return "", 204


login_manager = flask_login.LoginManager(app)
user_pass = {}


# @app.route("/call_bash", methods=["GET"])
# def call_bash():
#     i0bash_caller.open_client("")
#     return {}, 200

# {
#             "name": "汇文楼",      
#             "line": "共五层，106间教室，其中102间在用",      
#             "f1": "后勤办公区（共16间教室）",  
#             "f2": "实验室（共20间教室）",    
#             "f3": "教学办公区（共24间教室）",  
#             "f4": "教学办公区（共24间教室）",  
#             "f5": "办公区（共21间教室）",    
#         }
@app.route("/statistics", methods=["GET"])
def relationship():
    # static/data/test_data.json
    blogs = Blog.query.all()
    mylist = []
    for blog in blogs:
        item = {
            "name": blog.name,      
            "line": blog.line,      
            "f1": blog.f1,  
            "f2": blog.f2,    
            "f3": blog.f3,  
            "f4": blog.f4,  
            "f5": blog.f5,
        }
        mylist.append(item)
    print('mylist=>', mylist)
    return jsonify(mylist)


# @app.route("/index_a/")
# def index():
#     return rt("index-A.html")


# @app.route("/index_b/")
# def index_b():
#     return rt("index-B.html")


@login_manager.user_loader
def load_user(email):
    print("$" * 30)
    return user_pass.get(email, None)


@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email")
    password = request.form.get("password")
    try:
        data = User.query.filter_by(username=email, password=password).first()
        print(data, "@" * 10)
        if data is not None:
            print("test login")
            session["logged_in"] = True

            if email in admin_list:
                session["isadmin"] = True
                print("@" * 20, "setting isadmin")
            session["userid"] = data.id

            print("login sucess", "#" * 20, session["logged_in"])

            # w = TeacherWork.query.get(1)
            # print('w=', w, w.answer, w.title)
            # if w is not None:
            #     session['title'] = w.title
            #     session['detail'] = w.detail
            #     session['answer'] = w.answer

            return redirect(url_for("home", pagenum=1))
        else:
            return "Not Login"
    except Exception as e:
        print(e)
        return "Not Login"
    return redirect(url_for("home", pagenum=1))


@app.route("/register", methods=["POST"])
def register():
    email = request.form.get("email")
    pw1 = request.form.get("password")
    pw2 = request.form.get("password2")
    if not pw1 == pw2:
        return redirect(url_for("home", pagenum=1))
    # if DB.get_user(email):
    if email in user_pass:
        print("already existed user")
        return redirect(url_for("home", pagenum=1))
    # salt = PH.get_salt()
    # hashed = PH.get_hash(pw1 + salt)
    print("register", email, pw1)
    new_user = User(username=email, password=pw1)
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for("home", pagenum=1))


@app.route("/logout")
def logout():
    session["logged_in"] = False
    return redirect(url_for("home", pagenum=1))


reviews = []


@login_manager.unauthorized_handler
def unauthorized_handler():
    return "Unauthorized"


@app.route("/", methods=["GET"])
def index():
    return rt("index.html")

# Custom static data
@app.route("/cdn/<path:filename>")
def custom_static(filename):
    print("#" * 20, filename, " in custom_static", app.root_path)
    return send_from_directory(
        "/Users/abel/Downloads/AbelProject/FlaskRepository/ppt_platform/upload/",
        filename,
    )


# --------------------------


if __name__ == "__main__":
    db.create_all()

    app.run(host="localhost", port=8000, threaded=False)
