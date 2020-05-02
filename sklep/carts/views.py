from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from products.models import product
from .models import Cart, CartItem
# Create your views here.

def view(request):
    try:
        the_id = request.session['cart_id']
    except:
        the_id = None
    if the_id:
        cart = Cart.objects.get(id=the_id)
        context = {"cart": cart}
    else:
        empty_message = "Twój koszyk jest pusty czas najwyzszy udać się na zakupy"
        context = {"empty": True, "empty_message": empty_message}    
    
    
    template = "cart/koszyk.html"
    return render(request, template, context)


def update_cart(request, slug):
    request.session.set_expiry(0)
    try:
        qty = request.GET.get('qty')
        update_qty = True
    except:
        qty = None
        update_qty = False    
    try:
        the_id = request.session['cart_id']
    except:
        new_cart = Cart()
        new_cart.save()
        request.session['cart_id'] = new_cart.id
        the_id = new_cart.id 

    cart = Cart.objects.get(id=the_id)

    
    basket = product.objects.get(slug=slug)
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=basket)
    if update_qty and qty:
        if int(qty) == 0:
            cart_item.delete()
        else:
            cart_item.quantity = qty
            cart_item.save()
    else:
        pass    
    #if not cart_item in cart.items.all():
     #   cart.items.add(cart_item)
    #else:
      #  cart.items.remove(cart_item)  
    new_total = 0.00 
    for item in cart.cartitem_set.all():
        line_total = float(item.product.price) * item.quantity
        new_total += line_total

    request.session['cart_items_total'] = cart.cartitem_set.count()
    cart.total = new_total
    cart.save()    
    return HttpResponseRedirect(reverse("cart")) 