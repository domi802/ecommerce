from django.contrib import admin
from .models import product, ProductImage
# Register your models here.

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3

class admin_product(admin.ModelAdmin):
    list_display=('title','price','slug')
    list_editable=('price',)
    prepopulated_fields = {'slug':('title',)}
    inlines = [ ProductImageInline, ] 



    
    
admin.site.register(product,admin_product)

