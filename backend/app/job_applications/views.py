from django.http import JsonResponse
from .models import JobApplications
from .serializers import JobApplicationSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def current_jobs(request):
    match request.method:
        case 'GET':
            job_applications = JobApplications.objects.all()
            serializer = JobApplicationSerializer(job_applications, many=True)
            return Response(serializer.data)
        case 'POST':
            serializer = JobApplicationSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def job_detail(request, id):
    try:
        job_application = JobApplications.objects.get(pk=id)
    except JobApplications.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    match request.method:
        case 'GET':
            serializer = JobApplicationSerializer(job_application)
            return Response(serializer.data)
        case 'PUT':
            serializer = JobApplicationSerializer(job_application, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        case 'DELETE':
            job_application.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)