from django.contrib import admin
from api.models import Tournament

class TournamentAdmin(admin.ModelAdmin):
    pass
admin.site.register(Tournament, TournamentAdmin)