from django.urls import path, include
from job_applications import views

urlpatterns = [
    path('active/', views.current_jobs),
    path('active/<int:id>', views.job_detail),
]