from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('jobs/', include("job_applications.urls")),
    path('api/auth/', include("authentication.urls")),
]