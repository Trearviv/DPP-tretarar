$(function () {
    const $list = $("#ft_list");
    const cookieName = "todos";

    function save() {
        const todos = $list.children(".todo-item").map(function () {
            return $(this).text();
        }).get();

        document.cookie = cookieName + "=" +
            encodeURIComponent(JSON.stringify(todos)) +
            "; max-age=31536000; path=/; SameSite=Lax";
    }

    function createTodo(text) {
        const $todo = $("<div>")
            .addClass("todo-item")
            .text(text);

        $todo.on("click", function () {
            if (confirm("Remove this to-do?")) {
                $todo.remove();
                save();
            }
        });

        $list.prepend($todo);
    }

    function load() {
        const cookie = document.cookie.split("; ")
            .find(function (item) {
                return item.startsWith(cookieName + "=");
            });

        if (!cookie) {
            return;
        }

        try {
            const todos = JSON.parse(
                decodeURIComponent(cookie.substring(cookieName.length + 1))
            );

            if (Array.isArray(todos)) {
                todos.forEach(function (todo) {
                    if (typeof todo === "string") {
                        createTodo(todo);
                    }
                });
            }
        } catch (error) {
            console.error("Could not load saved to-dos.", error);
        }
    }

    $("#new-todo").on("click", function () {
        const text = prompt("Enter a new to-do:");

        if (text !== null && text.trim() !== "") {
            createTodo(text.trim());
            save();
        }
    });

    load();
});
