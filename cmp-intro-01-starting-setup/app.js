const app = Vue.createApp({
    data(){
        return {
            //since we define this data property in the component it is not necesary here this can be removed
            detailsAreVisible: false,
            friends:[
                { id: 'manuel', name: 'Manuel Lorenz', phone: '0234 5678', email: 'manuel@localhost.com'},
                { id: 'julie', name: 'Julie Doe', phone: '91011 1213', email: 'julie@localhost.com'},
            ]
        }
    },
    //since we define the methods in the component it is not necesary here this can be removed
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

// A component is a official VUEJS element and it is basicaly like a custom html element here we define our custom html tag!!!
// We will name our component as a multi word element so it will not clash with reserved words this is the first argument
// The second parameter is a config object just as we pass to create app. It is declared as a new app that will be connected to the main app

app.component('friend-contact',{
    //Component needs it own template. Template defines the html code for the component app
    template: `
    <li >
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">
            {{detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data(){
        //These elements will not clash with the above app because it is encapsulated
        return {
            detailsAreVisible: false,
            friend: { id: 'manuel', name: 'Manuel Lorenz', phone: '0234 5678', email: 'manuel@localhost.com'},
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
//Obs: this component is not mounted because we are going to use templates
});

app.mount('#app');