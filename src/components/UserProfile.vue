<template>
    <v-card v-if="childUser" class="pa-5">
        <div class="card">
            <div>
                <img width="100" src="../assets/logo.png" alt="">
                <!--Поставил заглушку т.к картинка недоступна-->
            </div>
            <div class="card-info">
                <div><b>Имя: </b>{{childUser.firstname}}</div>
                <div><b>Фамилия: </b>{{childUser.lastname}}</div>
                <div><b>Почта: </b>{{childUser.email}}</div>
                <div><b>Телефон: </b>{{childUser.phone}}</div>
                <div><b>Дата Рождения: </b>{{childUser.birthday}}</div>
                <div><b>Пол: </b>{{gender}}</div>
                <h4 class="mt-3"><b>Адрес</b></h4>
                <div>{{childUser.address.streetName}}, {{childUser.address.buildingNumber}}</div>
                <div>{{childUser.address.city}}</div>
                <div>{{childUser.address.zipcode}}</div>
                <div>{{childUser.address.country}}</div>
                <div><b>Сайт: </b>{{childUser.website}}</div>
            </div>
            <v-btn
                @click="edit"
            >
                Редактировать
            </v-btn>
        </div>
    </v-card>
</template>

<script>
    export default {
        props: ['user'],
        computed:{
            childUser(){
                return this.user
            },
            gender(){
                return this.childUser.gender === 'female' ? 'женский' : 'мужской'
            }
        },
        methods:{
            edit(){
                this.$emit('editUser')
            }
        }
    }
</script>

<style scoped>
    .card-info > div{
        margin-top: 5px;
    }
    .card{
        justify-content: space-between;
        display: flex;
    }
    .card-info{
        margin: 0 30px;
    }
    @media(max-width: 600px){
        .card-info{
            margin: 0 0 30px 0;
        }
        .card{
            flex-direction: column;
        }
        .card > div:first-child{
            text-align: center;
        }
    }
</style>