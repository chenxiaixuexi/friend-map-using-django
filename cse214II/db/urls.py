from django.conf.urls import url,include
from db import views

urlpatterns = [
    url(r'add$',views.add_frnd,),
    url(r'delete$',views.deleteFrnd,),
    url(r'edit$',views.edit_frnd,),
    url(r'search$',views.search_frnd,),
    url(r'show$',views.show_frnd,),
    url(r'^$',views.homepage,),
]