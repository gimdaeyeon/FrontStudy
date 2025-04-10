export const getStringedDate = (targetDate) => {
//     날짜 -> YYYY-MM-DD,
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    month = month.toString().padStart(2, '0');
    date = date.toString().padStart(2, '0');
    return `${year}-${month}-${date}`
}