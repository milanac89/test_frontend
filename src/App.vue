<template>
  <v-app>
    <v-main>
      1. Отображение информации о пользователе
      <br />
      <!-- TODO сделать в отдельном блоке отображение информации о выбранном пользователе с использование v-card -->
      2. Выбор пользователя
      <br />
      <!-- TODO используйте v-autocomplete для выбора пользователя -->
      3. Редактирование пользователя
      <!-- TODO добавить возможность редактировать данные пользователя -->
      <v-btn
        color="info"
        :loading="loading"
        @click="getUsers"
      >
        Список пользователей
      </v-btn>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{user.firstname}}
        </li>
      </ul>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
      users: [],
      loading: false
  }),

  methods: {
    getUsers() {
      // TODO получить список пользователей отсюда
      // https://fakerapi.it/api/v1/persons?_locale=ru_RU
        this.loading = true
        fetch('https://fakerapi.it/api/v1/persons?_locale=ru_RU')
            .then((res)=> res.json())
            .then((users)=>
                {
                    console.log(users.data)
                    this.users = users.data
                    this.loading = false
                }
            )
    },
  },
};
</script>
