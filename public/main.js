const questionTable = document.querySelector(".table.question");
const feedbackTable = document.querySelector(".table.feedback");

const rows = document.querySelectorAll(".row.content");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const ids = document.querySelectorAll(".id");
const navBtns = document.querySelectorAll("li");

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

navBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        resetAllButtons();
        btn.classList.toggle("active");
        switch (index) {
            case 0:
                questionTable.classList.remove("invisible");
                feedbackTable.classList.add("invisible");
                break;
            case 1:
                feedbackTable.classList.remove("invisible");
                questionTable.classList.add("invisible");
                break;
        }
    });
});

function resetAllButtons() {
    navBtns.forEach((btn) => btn.classList.remove("active"));
}
