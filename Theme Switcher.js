let bgContainerE1 = document.getElementById("bgContainer");
let headingE1 = document.getElementById("heading");
let themeUserInputE1 = document.getElementById("themeUserInput");

let lightThemeImgUrl = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeUrl = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInputE1.value;

        if (themeUserInputVal === "Light") {
            bgContainerE1.style.backgroundImage = lightThemeImgUrl;
            headingE1.style.color = "#014d40";
        } else if (themeUserInputVal === "Dark") {
            bgContainerE1.style.backgroundImage = darkThemeUrl;
            headingE1.style.color = "#ffffff";
        } else {
            alert("Enter a valid theme");
        }
    }


}








themeUserInputE1.addEventListener("keydown", changeTheme);