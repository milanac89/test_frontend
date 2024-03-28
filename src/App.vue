<template>
  <v-app>
    <v-main class="pa-5">
      <div class="wrapper">
        <div v-if="visibleProfile">
          <div class="text-center mb-7">
            <v-btn
              color="info"
              :loading="loading"
              @click="getUsers"
            >
              Загрузить пользователей
            </v-btn>
          </div>
          <div v-if="users != 0">
            <v-autocomplete
              class="mb-5"
              v-model="user"
              label="Autocomplete"
              :items="users"
              item-text="firstname"
              item-id="id"
              return-object
            ></v-autocomplete>
          </div>
          <user-profile @editUser="openEditor" :user="user"></user-profile>
        </div>
        <user-edit @cancelEditor="openProfile" @updateUsers="updateUsers($event)" :user="user" v-if="!visibleProfile && user"></user-edit>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {

  data: () => ({
      user: null,
      users: [],
      loading: false,
      visibleProfile: true
  }),

  methods: {
    async getUsers() {
        this.loading = true
        this.user = null
        try {
            const response = await fetch('https://fakerapi.it/api/v1/persons?_locale=ru_RU')
            const users = await response.json();
            this.users = users.data
        } catch {
            alert('Error')
        } finally {
            this.loading = false
        }
    },
    updateUsers(e){
      this.users = this.users.map((user)=>{
        if(user.id === e.id){
            return e
        } else return user
      })
      this.user= e
    },
    openEditor(){
        this.visibleProfile = false
    },
    openProfile(){
        this.visibleProfile = true
    }
  },
};
</script>
<style>
  .wrapper{
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
</style>