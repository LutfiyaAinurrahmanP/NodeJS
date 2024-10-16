export class TodoListService {

    todolist = ["Lutfiya", "Ainurrahman", "Prasetyo"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        });
    }

    getTodoList(req, res) {
        res.write(this.getJsonTodoList());
        res.end();
    }

    createTodoList(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            res.write(this.getJsonTodoList());
            res.end();
        })
    }

    updateTodoList(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist[body.id] = body.todo;
            }

            res.write(this.getJsonTodoList());
            res.end();
        })
    }

    deleteTodoList(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist.splice(body.id, 1);
            }

            res.write(this.getJsonTodoList());
            res.end();
        })

    }
}