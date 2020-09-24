export function formatDate(newDate: any) {
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  const formattedMinutes = `${minutes<10?`0${minutes}`:`${minutes}`}`;
  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return `${year} ${monthName[month]} ${date} ${hour}:${formattedMinutes}:${seconds}`
}