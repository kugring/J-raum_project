# Generated by Django 5.0 on 2023-12-13 10:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order_content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=15)),
                ('menu_num', models.IntegerField()),
                ('price', models.IntegerField()),
                ('upload_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]