from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from products.models import product
from .models import Cart
# Create your views here.

def view(request):
    
    cart = Cart.objects.all()[0]
    context = {"cart": cart}
    template = "cart/koszyk.html"
    return render(request, template, context)


def update_cart(request, slug):
    cart = Cart.objects.all()[0]
    basket = product.objects.get(slug=slug)
    if not basket in cart.products.all():
        cart.products.add(basket)
    else:
        cart.products.remove(basket) 
    new_total = 0.00 
    for item in cart.products.all():
        new_total += float(item.price)

    cart.total = new_total
    cart.save()    
    return HttpResponseRedirect(reverse("cart")) 