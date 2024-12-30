let tasks = [{ title: "Upload file", dueTime: 20, priority: 4 },
    { title: "write a code", dueTime: 3, priority: 5 },
    { title: "Download file", dueTime: 5, priority: 2 }]
    
    const addtask = (tasks, new_task) => {
        tasks.push(new_task);
    }
    addtask(tasks, { title: "Debug code", dueTime: 10, priority: 8 })
    console.log(tasks);
    
    
    const sort_by_field=(tasks)=>{
       return tasks.sort((a, b)=>{return a.priority-b.priority});
    }
    let new_a=sort_by_field(tasks);
    console.log(new_a);
    
     const filled=(tasks,timefram)=>{
        // let total=0;
        return tasks.filter(task=>((task.dueTime<=timefram)))
    }
    console.log(filled(tasks,5));
    
    
    tasks.forEach(task=>{
        setTimeout(()=>{
            console.log(`Reminder:task ${task.title} is due now!`)
        },task.dueTime*1000)
    })