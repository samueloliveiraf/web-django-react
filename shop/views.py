
from typing import Tuple
from django.views.generic.base import RedirectView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class CategoryProductView(APIView):
    def get(self, request):
        category_obj = Category.objects.all()
        category_serializer = CategorySerializer(category_obj, many=True).data
        data=[]

        for cata in category_serializer:
            product_obj = Product.objects.filter(category=cata['id'])
            cata['products'] = ProductSerialializers(
                product_obj, many=True, context={'request':request}).data
            data.append(cata)

        return Response(category_serializer)


class SingleCategory(APIView):
    def get(self, request, id):
        category_obj = Category.objects.filter(id=id)
        category_serializer = CategorySerializer(category_obj, many=True).data
        data=[]

        for cata in category_serializer:
            product_obj = Product.objects.filter(category=cata['id'])
            cata['products'] = ProductSerialializers(
                product_obj, many=True, context={'request':request}).data
            data.append(cata)

        return Response(category_serializer)


class CategorisView(APIView):
    def get(self, request):
        categoris_obj = Category.objects.all()
        category_serializer = CategorySerializer(
            categoris_obj, many=True, context={'request': request}).data
        return Response(category_serializer)

