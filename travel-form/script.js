const form = document.myForm

form.addEventListener(`submit`, function(event){
    event.preventDefault()

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value
    const location = form.desiredDestination.value; 



    const checkedRestrictions = []
    for(let i=0; i < form.Restrictions.length; i++) {
        if(form.Restrictions[i].checked) {
            checkedRestrictions.push(form.Restrictions[i].value)
        }
    }

    alert(`First name: ${firstName}
    Last name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location: ${location}
    Dietary restrictions: ${checkedRestrictions}`);

})

