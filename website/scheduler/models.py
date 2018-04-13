from django.db import models

# General course database, common to all the faculties

class Faculty(models.Model):
    name = models.CharField(max_length=100)


class StudyProgram(models.Model):
    name = models.CharField(max_length=200)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)

class Course(models.Model):
    ID = models.CharField(primary_key=True, max_length=6)
    name = models.CharField(max_length=200)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL)
    credit_points = models.FloatField()

    # Algorithm flags
    days_before = models.IntegerField()
    is_required = models.BooleanField(default=True)
    has_exam = models.BooleanField(default=True)
    is_first = models.BooleanField(default=False)
    is_last = models.BooleanField(default=False)

    # Internal flags
    is_taught = models.BooleanField(default=True)
