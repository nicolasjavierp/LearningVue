const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: ''
    };
  },
  watch:{
    // Watchers are not optimal for this type of things
    // name(value){
    //   //it can also be called with 2 parameters name(newValue, oldValue)
    //   //here value = this.name
    //   if (value === ''){
    //     this.fullname == '';
    //   }else{
    //     this.fullname = value + ' ' + 'Pantazis';
    //   }
    // }

    // Watchers are optimal for these types of things
    counter(value){
      if (value > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        }, 2000);
      }  
    }
  },
  // More eficient for outputing values
  computed:{
    fullname(){
      console.log('Running output_full_name !');
      if (this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName
    }
  },
  // Use methods if you know you need to recalculate elements
  methods: {
    setName(event, lastName) {
      //this.name = event.target.value + ' ' + lastName;
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset_input(){
      this.name = '';
      this.lastName = '';
    },
    output_full_name(){
      console.log('Running output_full_name !');
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Pantazis' 
    }
  }
});

app.mount('#events');
