
from rest_framework import serializers
from .models import *


class ProductSerialializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1


    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)
