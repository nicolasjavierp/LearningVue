// Vuejs APROACH
VTTCue.createApp({
    data() {
        return{
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');

// PURE JAVASCRIPT APROACH
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){ 
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = ''; //this is to clear the initial textbox after adding the element
// }

// buttonEl.addEventListener('click', addGoal);
