from django.db import models


# General course database, common to all the faculties

class Faculty(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class StudyProgram(models.Model):
    name = models.CharField(max_length=200)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)

    class Meta:
        ordering = ['name', 'faculty']

    def __str__(self):
        return '{0} - {1}'.format(self.name, str(self.faculty))


class Course(models.Model):
    ID = models.CharField(primary_key=True, max_length=6)
    name = models.CharField(max_length=200)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True)
    credit_points = models.DecimalField(max_digits=2, decimal_places=1)

    # Algorithm flags
    days_before = models.IntegerField()
    is_required = models.BooleanField(default=True)
    has_exam = models.BooleanField(default=True)
    is_first = models.BooleanField(default=False)
    is_last = models.BooleanField(default=False)

    # Internal flags
    is_taught = models.BooleanField(default=True)

    class Meta:
        ordering = ['ID']

    def __str__(self):
        return "{0} - {1}".format(self.name, self.ID)


class Registration(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    study_program = models.ForeignKey(StudyProgram, on_delete=models.CASCADE)
    semester = models.IntegerField()

    def __str__(self):
        return "{0} - {1}".format(str(self.course), str(self.study_program))
