const app = Vue.createApp({
    data() {
        return{
            courseGoal: "Finish the course and learn Vue !",
            courseGoalA: "<h2>Learn Botstrap !</h2>",
            courseGoalB: "Create cool apps with Vue !",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber<0.5){
                return this.courseGoalA;
            }else {
                return 'Learn more VueJs!!';
            }

        }
    }
});
app.mount('#user-goal')