const app = Vue.createApp({
    data() {
        return{
            my_name:'Nicolas Javier Pantazis',
            my_age: 39,
            my_favorite_number: 0,
            google_img: "<img src='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/King-Leonidas.300.webp'>",
            just_the_img_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/King-Leonidas.300.webp',
        };
    },
    methods: {
        adding_five_to_age(){
            return this.my_age + 5;
        },
        get_favorite_number(){
            return Math.random();
        },
        get_image(){
            return this.google_img;
        }
    }
});
app.mount('#assignment')