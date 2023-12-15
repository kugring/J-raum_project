from django.db import models

# Create your models here.
class Review (models.Model):
    user = models.CharField(max_length=15)
    menu_num = models.IntegerField()
    price = models.IntegerField()
    upload_date = models.DateTimeField(auto_now_add=True)
    # H_america = models.IntegerField()
    # C_america = models.IntegerField()
    # H_Latte = models.IntegerField()
    # C_Latte = models.IntegerField()
    # H_vala = models.IntegerField()
    # C_vala = models.IntegerField()
    # H_cara = models.IntegerField()
    # C_cara = models.IntegerField()
    # H_goguma = models.IntegerField()
    # C_goguma = models.IntegerField()
    # H_malcha = models.IntegerField()
    # C_malcha = models.IntegerField()
    # C_affo = models.IntegerField()
    # C_can = models.IntegerField()
    # H_tea = models.IntegerField()
    # C_tea = models.IntegerField()
    # H_omi = models.IntegerField()
    # C_omi = models.IntegerField()
    # H_ginger = models.IntegerField()
    # C_ginger = models.IntegerField()

