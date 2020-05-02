from django.db import models
from products.models import product
# Create your models here.

class CartItem(models.Model):
    cart = models.ForeignKey('Cart', on_delete=models.DO_NOTHING, null=True, blank=True)
    product = models.ForeignKey(product, on_delete=models.DO_NOTHING, default=True)
    line_total = models.DecimalField(default=10.99, max_digits=100, decimal_places=2)
    quantity = models.IntegerField(default=1)

    def __unicode__(self):
        try:    
            return str(self.cart.id)
        except:
            return self.product.title    

class Cart(models.Model):
    total = models.DecimalField(max_digits=100, decimal_places=2, default=0)
    active = models.BooleanField(default=True)

    def __unicode__(self):
        return "Cart id %s " %(self.id)