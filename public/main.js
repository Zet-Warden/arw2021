const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const ids = document.querySelectorAll(".id");

checkboxes.forEach((cb, index) => {
    cb.addEventListener("click", (event) => {
        const id = ids[index].innerText;

        const data = {
            id: id,
            isChecked: cb.checked,
        };

        fetch("update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    });
});
