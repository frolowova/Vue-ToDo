Vue.component("view-task", {
    props: ["task"],
    methods: {
        done_task() {
            this.$emit("done-task")
        }
    },
    template: ` <div class="tasks">
                    <p class="task__message"> {{task}} </p>
                    <button @click="done_task()" class="del_btn">✖️</button>
                </div>`
})


let app = new Vue({
    el: "#app",
    data: {
        tasks: [],
        input_text: "",
        error_mess: "",
        errActive: false
    },
    methods: {
        add_task() {
            // Если input не пустой, от добавляем задачу
            if (this.input_text.trim()) {
                this.tasks.push({ item: this.input_text })
                this.input_text = ""
            } else {
                // Выводим сообщение о пустой строке
                this.input_text = ""
                this.errActive = true
                this.error_mess = "Введи текст, я не могу сделать пустую задачу"
                setTimeout(() => {
                    this.errActive = false
                    this.error_mess = ""
                }, 3000)
            }
        },
        del_task(i) {
            this.tasks.splice(i, 1)
        }
    }
})