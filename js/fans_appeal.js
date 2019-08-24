function Click() {
    let current_date = new Date();
    let name = document.getElementById("author_name").value;
    let text = document.getElementById("fan_appeal").value;
    let feedback = document.querySelector('.feedback');

    if(name === "") {
        alert("Name is empty");
    } else if (text === "") {
        alert("Appeal is empty");
    } else {
        feedback.insertAdjacentHTML('beforeend',
        `<div class = 'feedback'>
                    <p class='text-justify pt-1'>
                    ${text}
                    </p>
                    <div class='time_and_author'>
                    <span class='pl-4'>${current_date.toLocaleString()}</span>
                    <span class='pr-4'>${name}</span>
                </div>
                <hr class='col-md-12 col-11'>           
            `);
        document.getElementById("author_name").value = "";
        document.getElementById("fan_appeal").value = "";
    }
}