
from django.urls import path
from .views import *


urlpatterns = [
    path('categoryproduct/', CategoryProductView.as_view()),
]

