from django.shortcuts import render
from django.http import Http404
# Create your views here.

from .models import product
def home(request):
    template= "products/home.html"
    products= product.objects.all()
    context= {'product':products}
    return render(request,template,context)


def single(request, slug):
    try:
        template = "products/produkt.html"
        products = product.objects.get(slug=slug)
        context = {'product':products}
        return render(request,template,context)
    except:
       raise Http404
