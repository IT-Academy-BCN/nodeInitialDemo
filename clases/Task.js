class Task {
    constructor(title, createdBy) {
        this.id = null
        this.status = "TODO";
        this.title = title;
        this.createdAt = (new Date()).toISOString();
        this.startedAt = null;
        this.finishedAt = null;
        this.createdBy = createdBy;
    }
}
module.exports = Task;