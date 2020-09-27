enum Month {
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
}

enum Day {
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
}

export function formatAdvancedTime(newDate: any) {
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  const formattedMinutes = `${minutes<10?`0${minutes}`:`${minutes}`}`;

  return `${year} ${Month[month]} ${date} ${hour}:${formattedMinutes}:${seconds}`
}

export function formatSimpleTime(newDate: any): string {
  const day = newDate.getDay()
  const date = newDate.getDate()
  const month = newDate.getMonth()
  const simpleDate: string = `${Day[day]}, ${date} ${Month[month]}`

  return simpleDate;
}


