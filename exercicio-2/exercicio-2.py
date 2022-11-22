#!/usr/bin/python
import sys

STR_BELONGS = "Pertence a sequência"
STR_DOESNT_BELONG = "NÃO pertence a sequência"

def fibonacci(x):
    if x == 0:
        print("0")
        print(STR_BELONGS)
        return
    if x == 1:
        print("0 1")
        print(STR_BELONGS)
        return

    i = 2
    soma = 0
    f0 = 0
    f1 = 1
    pert = False

    print("0 1", end = " ")

    while i <= x:
        soma = f0 + f1
        f0 = f1
        f1 = soma
        i += 1
        if x == soma:
            pert = True
        print(soma, end = " ")

    soma = f0 + f1
    if x == soma:
        pert = True

    print()
    if pert:
        print(STR_BELONGS)
    else:
        print(STR_DOESNT_BELONG)



if len(sys.argv) > 1:
    if sys.argv[1].isdigit():
        x = int(sys.argv[1])
        fibonacci(x)

