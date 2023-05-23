const app = Vue.createApp({
    data() {
      return {
        name: '',
        confirmName: ''
      };
    },
    methods:{
        setName(event){
            this.name = event.target.value;
        },
        confirmInput(){
            this.confirmName = this.name;
        },
        alert(message){
            alert(message);
        }
    }
  });
  
  app.mount('#assignment');