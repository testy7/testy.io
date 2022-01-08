import csv

import keras
from keras import layers






def trainingdatax(n):
    res = []
    with open('data.csv', newline='') as f:

        reader = csv.reader(f)
        m = 0
        z = 0
        for row in reader:
            if m == n+10080:

                res.append(row)
                z = 1
            if m > n + 10080 and z % 10 == 0:
                res.append(row)
            if m == n + 110881:

                res = [x / res[-1] for x in res]
                return res
            m = m+1
            z = z + 1




def trainingdatay(n):
    with open('data.csv', newline='') as f:
        reader = csv.reader(f)
        m = 0
        for row in reader:
            if m == n:

                return row
            m = m+1

model = keras.Sequential(
    [
        layers.Conv1D(420),
        layers.Conv1D(420),
        layers.Dense(100, activation="relu"),
        layers.Dense(50, activation="relu"),
        layers.Dense(2),
    ]
)

print (trainingdatay(0))
print (0)
print (trainingdatax(0))











