# Generated by Django 3.0.5 on 2020-04-29 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_auto_20200421_1701'),
        ('carts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('active', models.BooleanField(default=True)),
                ('product', models.ManyToManyField(to='products.product')),
            ],
        ),
        migrations.AddField(
            model_name='cart',
            name='items',
            field=models.ManyToManyField(blank=True, null=True, to='carts.CartItem'),
        ),
    ]
