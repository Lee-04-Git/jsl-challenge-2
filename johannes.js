// johannes.js
export const johannes = {
    firstname: "Johannes",
    surname: "Potgieter",
    role: "Intern"
};
 const display= johannes.firstname + " " + johannes.surname + " (" + johannes.role + ")"
document.querySelector('#johannes').innerText = display
