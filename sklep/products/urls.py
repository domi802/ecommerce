from django.urls import path
from . import views
from django.urls import re_path

urlpatterns = [
    path('',views.home,name="home"),
    re_path(r'^produkty/(?P<slug>[\w-]+)/$', views.single, name='single_product')
]