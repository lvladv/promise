from django.shortcuts import render


def start(request):
    # return render(request, '/home/ubpc/promise/frontend/build/index.html')
    return render(request, 'index.html')
