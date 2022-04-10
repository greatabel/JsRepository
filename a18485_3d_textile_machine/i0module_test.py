from math import *
import numpy as np
import pandas as pd
import requests
import math
from matplotlib import pyplot as plt
from scipy.special import *
from scipy.stats import norm


def mk_test_sens_slope(tmp, alpha=0.05):
    num = len(tmp)
    index = np.arange(0, num, 1)
    sgn = np.zeros((int(num * (num - 1) / 2)))
    slo = np.zeros((int(num * (num - 1) / 2)))
    beg = 0
    for kt in range(1, num):
        ned = beg + num - kt
        sgn[beg:ned] = tmp[kt:num] - tmp[kt - 1]
        slo[beg:ned] = (tmp[kt:num] - tmp[kt - 1]) / (index[kt:num] - index[kt - 1])
        beg = ned
    es = np.sum(np.sign(sgn))
    corr = 0.0
    un = np.unique(tmp)
    for kt in un:
        id = np.where(tmp == kt)
        corr += len(id[0]) * (len(id[0]) - 1.0) * (2 * len(id[0]) + 5)
    var = (num * (num - 1.0) * (2.0 * num + 5.0) - corr) / 18.0
    if es > 0.0:
        zmk = (es - 1.0) / np.sqrt(var)
    if es == 0.0:
        zmk = 0.0
    if es < 0.0:
        zmk = (es + 1.0) / np.sqrt(var)
    pval = 2 * (1 - norm.cdf(abs(zmk)))
    h = abs(zmk) > norm.ppf(1 - alpha / 2)
    slope = np.median(slo)
    return slope, h, pval, zmk


if __name__ == "__main__":
    file = open("data/2448/2448_0.txt")
    dt = file.read()
    id = int(dt.split('"')[1])
    type = int(dt.split('"')[3])
    print("编号:", id)
    print("类型:", type)
    dt = dt.split('"')[13]
    dt = dt.split(",")
    # dt = [float(x) if x != '' else 0 for x in dt]
    dt = [float(x) for x in dt if x != ""]
    # dt = np.delete(dt, np.where(dt == 0))
    dt = dt[-90:]
    max_percent = np.max(dt) * 0.05
    dt = list(filter(lambda x: abs(x) >= max_percent, dt))
    # if len(dt) < 30:
    #     continue
    # print(dt)

    percentile = np.percentile(dt, (25, 50, 75), interpolation="midpoint")
    Q1 = percentile[0]
    Q3 = percentile[2]
    IQR = Q3 - Q1
    ulim = Q3 + 1.5 * IQR
    llim = Q1 - 1.5 * IQR
    new_dt = []
    for i in range(len(dt)):
        if llim <= dt[i] and dt[i] <= ulim:
            new_dt.append(dt[i])

    new_dt = np.array(new_dt)
    print(new_dt)
    mean = np.mean(new_dt)
    mean = float("%.3g" % mean)
    print("均值：", mean)

    T = 7
    group1 = new_dt[-T:]
    group2 = new_dt[-2 * T : -T]
    group3 = new_dt[-3 * T : -2 * T]
    group4 = new_dt[-4 * T : -3 * T]
    print(group1)
    print(group2)
    print(group3)
    print(group4)
    point1 = np.mean(group1)
    point2 = np.mean(group2)
    point3 = np.mean(group3)
    point4 = np.mean(group4)
    print(point1)
    print(point2)
    print(point3)
    print(point4)
    A = [point4, point3, point2, point1]
    k = (abs(point1 - point4)) / 3
    print("四点斜率：", k)

    slope, h, pval, zmk = mk_test_sens_slope(new_dt, alpha=0.05)
    slope = float("%.3g" % slope)
    print("sen斜率：", slope)

    is_warning = 0
    if (
        (point1 > point2 and point2 > point3 and point3 > point4 and k > 0.17)
        or slope > 0.17
    ) and (type == 0 or type == 1 or type == 2 or type == 7):
        is_warning = 1
    print("是否警报：", is_warning)

    plt.figure(1)
    plt.plot(new_dt)
    plt.xlabel('time_span')
    plt.ylabel('monitor_value')
    plt.savefig("1.png")
    plt.figure(2)
    plt.plot(A)
    plt.xlabel('time_span')
    plt.ylabel('monitor_value')
    plt.savefig("2.png")
    # plt.show()
