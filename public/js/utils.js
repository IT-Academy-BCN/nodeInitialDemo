//sort Hall to top and order buttonlist
const sortBtnList = (btn) => {
    let buttonList = document.getElementById(btn);
    let buttonArray = Array.from(buttonList.getElementsByTagName("BUTTON"))
    let hall = buttonArray.shift(); 
    buttonList.append(hall);
    buttonArray.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent)
        })
        .forEach(li => buttonList.append(li));
}

