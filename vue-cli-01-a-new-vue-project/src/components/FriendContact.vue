<template>
    <li>
        <!-- Before ==> <h2>{{ friend.name }} </h2> -->
        <h2>{{ name }} {{ isFavorite === '1' ? '(favorite)':'' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <!-- Before ==> <li><strong>Phone:</strong>{{ friend.phone }}</li>
            Before ==> <li><strong>Email:</strong>{{ friend.email }}</li> -->
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default{
    // DO NOT USE SAME NAMES IN PROPS THAT IN DATA!!
    props:[
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavorite'
    ],
    data() {
        return {
            detailsAreVisible: false,
            friend:{
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "0123 45 678",
                email: "manuel@aol.com"
            }
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
            // this.phoneNumber = 'something'
        }
    }
};
</script>