# Generated by Django 5.1.4 on 2024-12-08 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0004_tasks_status_alter_tasks_completion_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='status',
        ),
        migrations.AddField(
            model_name='members',
            name='confpassword',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='members',
            name='email',
            field=models.EmailField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='completion_date',
            field=models.DateField(default='2024-12-9'),
        ),
    ]
