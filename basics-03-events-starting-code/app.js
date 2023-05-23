const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods:{
    confirmInput(){
      this.confirmName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    },
    setName(event, lastname){
      this.name = event.target.value + ' ' +  lastname
    },
    addCounter(num){
      this.counter = this.counter + num;
    },
    subCounter(num){
      if (this.counter - num>0){
        this.counter = this.counter - num;
      }
      
    }
  }
});

app.mount('#events');
