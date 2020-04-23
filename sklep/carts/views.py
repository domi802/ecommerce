from django.shortcuts import render
from .models import Cart
# Create your views here.

def view(request):
    cart = Cart.objects.all()[0]
    context = {"cart": cart}
    template = "cart/koszyk.html"
    return render(request, template, context)
