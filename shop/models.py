from os import name, times
from django.db.models.base import Model

from django.db.models.deletion import CASCADE
from account.models import CustomUser
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


User = get_user_model()


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=9)
    address = models.TextField(blank=True, null=True)
    username = models.CharField(
        max_length=100, unique=True, blank=True, null=True)

    def __str__(self):
        return self.user.email


@receiver(post_save, sender=User)
def create_customer(sender, instance, created, *args, **kwargs):
    if created:
       Customer.objects.create(user=instance)
       Token.objects.create(user=instance)


@receiver(post_save, sender=Customer)
def customer_pre_save(sender, instance, created, *args, **kwargs):
    if created:
        instance.username = f'customer{instance.id}'
        instance.save()


class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='category/', blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title


    class Meta:
        db_table = 'categorias'


class Brand(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='logo/', blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name


    class Meta:
        db_table = 'marcas'


class Product(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='product/')
    oldprice = models.PositiveIntegerField(blank=True, null=True)
    price = models.PositiveIntegerField()
    discount = models.PositiveIntegerField(blank=True, null=True)
    category = models.ManyToManyField(Category)
    brand = models.ForeignKey(Brand, on_delete=CASCADE, blank=True, null=True)
    details = models.TextField()
    tegs = models.TextField()
    time = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name


    class Meta:
        db_table = 'produtos'


class ProductView(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    view = models.PositiveIntegerField(default=0)


    def __str__(self):
        return self.product.name


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    title = models.TextField()


    def __str__(self):
        return self.title


class Slider(models.Model):
    name = models.CharField(max_length=200)
    details = models.TextField()
    image = models.ImageField(upload_to='slider/')
    url = models.TextField(default='#')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)


    def __str__(self):
        return self.name


class TrendingProduct(models.Model):
    products = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)


class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    total = models.PositiveIntegerField()
    complit = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.customer.user.email


class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    quantity = models.PositiveIntegerField()
    total = models.PositiveIntegerField()


ORDER_STATUS = (
    ("Pedido recebido", "Pedido recebido"),
    ("Processamento de Pedidos", "Processamento de Pedidos"),
    ("A caminho", "A caminho"),
    ("Pedido concluído", "Pedido concluído"),
    ("Pedido cancelado", "Pedido cancelado"),
)


class Order(models.Model):
    cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
    name = models.CharField(max_length=25)
    phone = models.CharField(max_length=9)
    address = models.TextField()
    email = models.CharField(max_length=160)
    order_status = models.CharField(
        max_length=100, choices=ORDER_STATUS, default="Pedido recebido")
    date = models.DateTimeField(auto_now_add=True)

