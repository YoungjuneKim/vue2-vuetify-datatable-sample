<template>
    <div>
    <vuetify-datatable :posts="posts"></vuetify-datatable>
    </div>
</template>

<script>
import axios from 'axios';
import VuetifyDatatable from "@/components/VuetifyDatatable";

export default {
    name: "Table",
    components: {
      VuetifyDatatable,
    },
    data: () => ({
      posts: [],
    }),
    created() {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(  response => {
            this.posts = response.data ;
        }).catch(error => {
            console.log(error) ;
        });
    },    
};
</script>
