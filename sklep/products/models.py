from django.db import models

# Create your models here.
class product(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=100)
    sale_price = models.DecimalField(decimal_places=2, max_digits=100,\
                                                    null=True, blank=True)
    slug = models.SlugField(unique=True)
    def __str__(self):
        return self.title

class ProductImage(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='img/')        
    thumbnail = models.BooleanField(default=False)