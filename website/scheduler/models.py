from django.db import models

# General course database, common to all the faculties

class Faculty(models.Model):
    name = models.CharField(max_length=100)


class StudyProgram(models.Model):
    name = models.CharField(max_length=200)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)


