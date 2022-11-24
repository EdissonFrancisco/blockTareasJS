export const uniqueDate = (tasks) => {
    const unique = [];
    tasks.forEach((task) => {
        if (!unique.includes(task.date)) {
            unique.push(task.date);
        }
    });
    return unique;
}