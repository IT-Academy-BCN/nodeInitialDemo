### TASK
Create an app managing a TO DO-list (executed via terminal) deploy with different types of persistance (data storage systems).

### FEATURES: 
- addTask()
- listTask()
- listAll()
- updateTask()
- deleteTask()
- showTaskState() returns {(pending/ executing/ completed), init date, completation date, userId}


### Level 1
JSON archive

### Level 2:
MySQL

### Level 3
MongoDB


### GITFLOW

Uses two branches: main and develop.
Main: official release history
Develop: integration branch for features


```
git branch develop
git push -u origin develop
```

Feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with main.

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow