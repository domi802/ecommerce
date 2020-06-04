from django.shortcuts import render
from django.http import Http404
from .models import Category
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
        wszystkie = product.objects.all()[:5]
        context = {'product':products, 'wszystkie':wszystkie}
        return render(request,template,context)
    except:
       raise Http404

def cat (request, slug):
    template = "products/kategoria.html"
    products = product.objects.filter(category__slug = slug )
    category = Category.objects.get(slug=slug)
    context =  {'product': products,'category': category}
    return render(request,template,context)

def subcat (request, slug, slug2):
    template = "products/kategoria.html"
    products = product.objects.filter(category__slug=slug)
    products = products.filter(category__slug=slug2)
    category = Category.objects.get(slug=slug)
    subcategory = Category.objects.get(slug=slug2)
    context =  {'product': products,'category': category, 'subcategory':subcategory}
    return render(request,template,context)

