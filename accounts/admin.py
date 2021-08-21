from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserCreationForm
from .models import MyUser

# Register your models here.


class UserAdmin(BaseUserAdmin):
    add_form = UserCreationForm

    list_display = ('name', 'email', 'is_admin')
    list_filter = ('is_admin',)

    fieldsets = (
        (None, {'fields': ('name', 'email', 'password')}),
        ('Permissions', {'fields': ('is_admin',)})
    )
    search_fields = ('name', 'email')
    ordering = ('name', 'email')

    filter_horizontal = ()


admin.site.register(MyUser, UserAdmin)


admin.site.unregister(Group)
