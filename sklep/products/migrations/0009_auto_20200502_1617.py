# Generated by Django 3.0.5 on 2020-05-02 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_variation_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='variation',
            name='category',
            field=models.CharField(choices=[('size', 'size')], default='size', max_length=120),
        ),
    ]
