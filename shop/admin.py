from django.contrib import admin
from .models import (
    Customer,
    Product,
    ProductView,
    Order,
    Category,
    CartProduct,
    Brand,
    TrendingProduct,
    Slider,
    Review,
    Cart
)


admin.site.register([Customer, Product,
                     ProductView,
                     Order,
                     Category,
                     CartProduct,
                     Brand,
                     TrendingProduct,
                     Slider,
                     Review,
                     Cart,])
