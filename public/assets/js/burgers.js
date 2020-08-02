$("body").on("click", ".eatButton", function () {
    const id = $(this).data("id");
    $.ajax({
        type: "PUT",
        url: `/api/burgers/${id}`,
        data: {
            devoured: 1
        }
    }).then(() => {
        location.reload();
    })
})

$("body").on("click", ".deleteButton", function () {
    const id = $(this).data("id");
    $.ajax({
        type: "DELETE",
        url: `/api/burgers/${id}`
    }).then(() => {
        location.reload();
    })
})

$("body").on("click", "#addButton", function () {
    const text = $("#addABurgerText").val();
    $.ajax({
        type: "POST",
        url: "/api/burgers",
        data: {
            burger_name: text
        }
    }).then(() => {
        location.reload();
    })
})