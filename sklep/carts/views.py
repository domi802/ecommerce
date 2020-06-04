from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from products.models import Variation, product  
from .models import Cart, CartItem
# Create your views here.

def isNum(data):
    try:
         int(data)
         return True
    except ValueError:
         return False

def view(request):
    try:
        the_id = request.session['cart_id']
    except:
        the_id = None
    if the_id:
        
        cart = Cart.objects.get(id=the_id)
        context = {"cart": cart}
        request.session['cart_items_total'] = cart.cartitem_set.count()
        new_total = 0.00 
        for item in cart.cartitem_set.all():
            if item.product.sale_price:
                line_total = float(item.product.sale_price) * item.quantity
                new_total += line_total
            else:    
                line_total = float(item.product.price) * item.quantity
                new_total += line_total
        cart.total = new_total
        cart.save()  
    else:
        empty_message = "Twój koszyk jest pusty czas najwyzszy udać się na zakupy"
        context = {"empty": True, "empty_message": empty_message}   
             
   
    template = "cart/koszyk.html"
    return render(request, template, context)




def update_cart(request, slug):
    request.session.set_expiry(0)

    try:
        the_id = request.session['cart_id']
    except:
        new_cart = Cart()
        new_cart.save()
        request.session['cart_id'] = new_cart.id
        the_id = new_cart.id 

    cart = Cart.objects.get(id=the_id)

    if not isNum(slug):
        basket = product.objects.get(slug=slug)
     
        product_var = []
        qty = request.GET['qty']
        size= request.GET['size']
        for item in request.GET:
                key = item
                val = request.GET[key]
                try:
                    v=Variation.objects.get(product=basket, category__iexact=key, title__iexact=val)
                    product_var.append(v)
                except:
                    pass
            
              
        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=basket)
        cart_item.variations.set('')
        if int(qty) <= 0:
            cart_item.delete()
        else:
                if len(product_var) > 0:
                    for item in product_var:    
                        cart_item.variations.add(item)
                cart_item.quantity = qty
                cart_item.save()
        print(slug)  
        
    
       
    else:
        print(cart.total)
        cartitem = CartItem.objects.get(id=slug)
        cart.total -= cartitem.product.price * cartitem.quantity
        cartitem.delete()
        cart.save()

  
       

    return HttpResponseRedirect(reverse("cart"))     
        