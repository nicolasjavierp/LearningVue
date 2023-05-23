const app = Vue.createApp({
    data() {
      return {
        input_text: "",
        is_hidden: true,
        input_background_color: ''
      };
    },
    methods: {
        // setText(event){
        //     console.log("Entered setText with : ",event.target.value)
        //     this.input_text = event.target.value;
        // }
        toggleHidden(){
          this.is_hidden = !this.is_hidden;
        }
    },
    computed: {
      evaluateUser() {
        // if (this.input_text === 'user1') {
        //     console.log("Match for user1 !");
        //     return true;
        // }else if (this.input_text === 'user2') {
        //     console.log("Match for user2 !");
        //     return true;
        // }else{
        //   return false;
        // }
        return{
          user1: this.input_text === 'user1',
          user2: this.input_text === 'user2',
          visible: !this.is_hidden,
          hidden: this.is_hidden
        }
      },
    }
  });
  
  app.mount('#assignment');
  