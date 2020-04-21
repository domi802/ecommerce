# Generated by Django 3.0.5 on 2020-04-20 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20200420_1732'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productimage',
            name='active',
        ),
        migrations.RemoveField(
            model_name='productimage',
            name='featured',
        ),
        migrations.RemoveField(
            model_name='productimage',
            name='updated',
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(upload_to='img/'),
        ),
    ]