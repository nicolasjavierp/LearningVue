const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        result: ''
      };
    },
    watch:{
      counter(){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        }, 5000);
 
      }
    },
    // More eficient for outputing values
    computed:{
      compute_result(){
          if (this.counter < 37){
            //console.log(this.counter + ' < 37' );
            return 'Not there yet!';
          }
          else if (this.counter > 37){
            //console.log(this.counter + ' > 37' );
            return 'Too much!';
          }
          else {
            return this.counter;
          }
      } 
    },
    // Use methods if you know you need to recalculate elements
    methods: {
      calculation(num){
          console.log('Running calculation !');
          this.counter = this.counter + num;
      }

    }
  });
  app.mount('#assignment');
  