const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()');
  },
  beforeMount(){
    console.log('beforeMount()');
  },
  mounted(){
    console.log('mounted()');
  },
  beforeUpdate(){
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  beforeUnmount(){
    console.log('beforeUnmount()');
  },
  unmount(){
    console.log('unmount()');
  }
});

app.mount('#app');

// This will manually unmount the app, not very comon to do it like this. We acll it
// To see the beforeUnmount and Unmount methods in action
setTimeout(function(){
  app.unmount()
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return{
      favoriteMeal: 'pizza'
    };
  },
  methods: {

  },
});

app.mount('#app2');