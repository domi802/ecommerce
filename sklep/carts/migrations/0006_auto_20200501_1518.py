# Generated by Django 3.0.5 on 2020-05-01 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_auto_20200421_1701'),
        ('carts', '0005_auto_20200501_1510'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartitem',
            name='product',
        ),
        migrations.AddField(
            model_name='cartitem',
            name='product',
            field=models.ForeignKey(default=True, on_delete=django.db.models.deletion.DO_NOTHING, to='products.product'),
        ),
    ]
