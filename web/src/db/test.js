const start = "2024-09-14T04:30:00.000+00:00"
const end = "2024-09-15T16:30:00.000+00:00"

console.log(new Date(start).toLocaleDateString("IN"))
console.log(new Date(end).toLocaleDateString("IN"))

function getEventDateStatus(start,end){
    const now = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);
  
    if (now < startDate) {
      return "STATUS.UPCOMING";
    } else if (now >= startDate && now <= endDate) {
      return "STATUS.ONGOING";
    } else {
      return "STATUS.OVER";
    }
  }

  console.log(getEventDateStatus("",""))