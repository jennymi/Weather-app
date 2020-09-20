export function getCurrentDate(){

    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    const formattedMonth = `${month<10?`0${month}`:`${month}`}`
    
    return `${year}-${formattedMonth}-${date} ${hour}:${minutes}:${seconds}`
    }