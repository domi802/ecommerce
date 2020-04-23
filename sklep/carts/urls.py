from django.urls import path
from . import views
from django.urls import re_path



urlpatterns = [
    re_path(r'^cart/(?P<slug>[\w-]+)/$', views.update_cart, name='update_cart'),
    re_path(r'^cart/$', views.view, name='cart'),

    ]