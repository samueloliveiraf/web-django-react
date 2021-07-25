
from django.urls import path
from .views import *


urlpatterns = [
    path('categoryproduct/', CategoryProductView.as_view()),
    path('categoris/', CategorisView.as_view()),
]

