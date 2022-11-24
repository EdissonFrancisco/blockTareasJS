export default (date) => {
    const dataElement = document.createElement('li');
    dataElement.classList.add('date');
    dataElement.innerHTML = date;
    return dataElement;
}