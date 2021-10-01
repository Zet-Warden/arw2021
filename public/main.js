const rows = document.querySelectorAll(".row.content");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const ids = document.querySelectorAll(".id");

checkboxes.forEach((cb, index) => {
    cb.addEventListener("click", (event) => {
        const id = ids[index].innerText;
        const row = rows[index];
        cb.checked ? row.classList.add("disabled") : row.classList.remove("disabled");

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
