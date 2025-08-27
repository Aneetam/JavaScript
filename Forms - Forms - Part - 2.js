let myFormE1 = document.getElementById("myForm");
let nameE1 = document.getElementById("name");
let emailE1 = document.getElementById("email");
let nameErrMsgE1 = document.getElementById("nameErrMsg");
let emailErrMsgE1 = document.getElementById("emailErrMsg");
let workingStatusE1 = document.getElementById("status");
let genderMaleE1 = document.getElementById("genderMale");
let genderFemaleE1 = document.getElementById("genderFemale");


let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};

myFormE1.addEventListener("submit", function(event) {
    event.preventDefault();

});


nameE1.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgE1.textContent = "Required*";
    } else {
        nameErrMsgE1.textContent = "";
    }
    formData.name = event.target.value;
});


emailE1.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgE1.textContent = "Required*";
    } else {
        emailErrMsgE1.textContent = "";
    }
    formData.email = event.target.value;
});


workingStatusE1.addEventListener("change", function(event) {
    formData.status = event.target.value;
});


genderMaleE1.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});


genderFemaleE1.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});


function validateFormData(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "") {
        name.textContent = "Required";
    }
    if (email === "") {
        email.textContent = "Required";
    }
}

function submitFormData(formData) {

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer a3708f12273b6e618d23ad97fe67e30af587bf9f5b8f6e8348ee7db0a4520f05",

        },
        body: JSON.stringify(formData)
    };

    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken" && jsonData.data[0].field === "email") {
                    emailErrMsgE1.textContent = "Email Already exits";
                }
            }
        });
}


myFormE1.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});