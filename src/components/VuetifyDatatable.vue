<template>
  <v-app id="inspire">
        <h2>Vue Hacker News 2.0</h2> 
        <v-col md="3">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" Single-line hide-details></v-text-field>
        </v-col>
        <v-row>
          <v-col>
            <v-data-table :headers="headers" :items="posts" :items-per-page="10" :search="search" class="elevation-1">
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon small class="mr-2" @click="deleteItem(item)">mdi-delete</v-icon> 
              </template>   
            </v-data-table>
          </v-col>
        </v-row>
  </v-app>
</template>

<script>
export default {
   props:["posts"],
   data:() => ({
     search:"",
     headers:[
       {text: "Id", value:"id"},
       {text: "Title", value:"title"},
       {text: "User", value:"user"},
       {text: "댓글", value:"comments_count"},
       {text: "싸이트", value:"domain"},
       {text: "시간", value:"time_ago"},
       {text: "Actions", value:"actions", sortable:false},
     ]
   }),
   methods: {
    deleteItem(item) {
      const index = this.posts.indexOf((x) => x.id === item.id);
      this.posts.splice(index, 1) ;
    },
    editItem(item) {
      console.log(item) ;
    },
  }
};
</script>