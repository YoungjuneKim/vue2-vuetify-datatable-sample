<template>
    <div>
        <ul>
            <li v-for="(user, id) in users" v-bind:key="id">
                {{ user.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    
export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(  response => {
            this.users = response.data ;
            console.log("user 몇개 : ", this.users.length) ;
        }).catch(error => {
            console.log(error) ;
        });
    },
}
</script>
