from django.db import models

# Create your models here.

class Category(models.Model):
      title = models.CharField(max_length=50)
      text = models.TextField(null=True, blank=True)
      slug = models.SlugField(unique= True)
      active = models.BooleanField(default=True)

      def __str__(self):
          return self.title




class product(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    category = models.ManyToManyField(Category, null=True, blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=100)
    sale_price = models.DecimalField(decimal_places=2, max_digits=100,\
                                                    null=True, blank=True)
    slug = models.SlugField(unique= True)
    def __str__(self):
        return self.title


class ProductImage(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='img/')        
    thumbnail = models.BooleanField(default=False)



class VariationManager(models.Manager):
    def all(self):
        return super(VariationManager, self).filter(active=True)

    def sizes(self):
        return self.all().filter(category='size')


VAR_CATEGORIES = (
    ('size', 'size'),

)

class Variation(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    category = models.CharField(max_length=120, choices=VAR_CATEGORIES, default='size')
    title = models.CharField(max_length=120)
    image = models.ForeignKey(ProductImage, on_delete=models.CASCADE, null=True, blank=True)
    price = models.DecimalField(max_digits=100, decimal_places=2, null=True, blank=True)
    active = models.BooleanField(default=True)

    objects = VariationManager()

    def __str__(self):
        return self.title