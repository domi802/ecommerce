from django.db import models
from products.models import product
# Create your models here.

class Cart(models.Model):
    products = models.ManyToManyField(product, null=True, blank=True)
    total = models.DecimalField(max_digits=100, decimal_places=2, default=0)
    active = models.BooleanField(default=True)

    def __unicode__(self):
        return "Cart id %s " %(self.id)