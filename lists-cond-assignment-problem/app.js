const app = Vue.createApp({
    data() {
      return { 
        goals: [],
        enteredGoal: '',
        is_hidden: false
      };
    },
    methods: {
      addGoal(){
        this.goals.push(this.enteredGoal);
      },
      removeGoal(idx){
        this.goals.splice(idx, 1)
      },
      toggleHidden(){
        console.log("value of hidden =", this.is_hidden)
        this.is_hidden = !this.is_hidden;
      }
    },
    computed: {
      buttonCaption(){
        return this.toggleHidden ? 'Hide List' : 'Show List';
      }
    }
  });
  
  app.mount('#assignment');
  