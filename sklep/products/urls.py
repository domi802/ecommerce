from django.urls import path
from . import views
from django.urls import re_path



urlpatterns = [
    path('',views.home,name="home"),
    re_path(r'^produkty/(?P<slug>[\w-]+)/$', views.single, name='single_product'),
    re_path(r'^kategorie/(?P<slug>[\w-]+)/$', views.cat, name='cat'),
    re_path(r'^kategorie/(?P<slug>[\w-]+)/(?P<slug2>[\w-]+)/$', views.subcat, name='subcat'),
]