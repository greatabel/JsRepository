from math import *
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import requests
import glob
import math
import json
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
    all_results = []
    # path = glob.glob("C:\\Users\\shudo\\Desktop\\禄劝\\median\\**\\*.txt",recursive=True)
    path = glob.glob("data/2448/*.txt", recursive=True)
    for i_txt in path:
        file = open(i_txt)
        dt = file.read()
        id = int(dt.split('"')[1])
        type = int(dt.split('"')[3])
        code = str(dt.split('"')[5])
        id1 = str(id)
        type1 = str(type)
        dt = dt.split('"')[13]
        dt = dt.split(",")
        dt = [float(x) for x in dt if x != ""]
        dt = dt[-90:]
        max_percent = np.max(dt) * 0.05
        dt = list(filter(lambda x: abs(x) >= max_percent, dt))
        if len(dt) < 30:
            continue

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
        mean = np.mean(new_dt)
        mean = float("%.3g" % mean)
        slope, h, pval, zmk = mk_test_sens_slope(new_dt, alpha=0.05)

        T = 7
        group1 = new_dt[-T:]
        group2 = new_dt[-2 * T : -T]
        group3 = new_dt[-3 * T : -2 * T]
        group4 = new_dt[-4 * T : -3 * T]
        point1 = np.mean(group1)
        point2 = np.mean(group2)
        point3 = np.mean(group3)
        point4 = np.mean(group4)
        k = (abs(point1 - point4)) / 3

        is_warning = 0
        if (
            (point1 > point2 and point2 > point3 and point3 > point4 and k > 0.17)
            or slope > 0.17
        ) and (type == 0 or type == 1 or type == 2 or type == 7):
            is_warning = 1

        # if is_warning == 1:
        plt.clf()
        plt.plot(new_dt)
        plt.savefig("{}.png".format(id1 + "_" + type1))

        slope = float("%.3g" % slope)
        k = float("%.3g" % k)
        result = {
            "monitorId": id,
            "type": type,
            "mean": mean,
            "changqislope": slope,
            "duanqislope": k,
            "warning": is_warning,
        }
        all_results.append(result)
        # result = {"monitorId": id, "type": type, "monitorIdcode": code,"mean": mean, "changqislope":slope, "duanqislope":k, "warning": is_warning}
        # if is_warning == 1:
        #    result = {"monitorId": id, "type": type, "monitorIdcode": code,"mean": mean, "slope":slope, "duanqislope":k, "warning": is_warning}
        #    all_results.append(result)
    print(all_results)

    # r = requests.post('http://10.248.10.50:8091/smi/api/data-analysis/trend-analysis', json.dumps(all_results)) #ip根据工厂ip进行更改
