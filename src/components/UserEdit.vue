<template>
    <div>
        <h1 class="mb-5">Редактирование</h1>
        <v-card  class="pa-5">
            <v-form class="card" v-model="form" @submit.prevent="save">
                <v-text-field
                    v-model="firstname"
                    :rules="firstnameRules"
                    class="mb-2"
                    clearable
                    label="Имя"
                ></v-text-field>

                <v-text-field
                    v-model="lastname"
                    :rules="lastnameRules"
                    clearable
                    label="Фамилия"
                ></v-text-field>

                <v-text-field
                    v-model="birthday"
                    :rules="birthdayRules"
                    clearable
                    label="Дата Рождения"
                ></v-text-field>


                <v-radio-group v-model="gender">
                    <v-radio label="Мужской" value="male"></v-radio>
                    <v-radio label="Женский" value="female"></v-radio>
                </v-radio-group>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    clearable
                    label="Почта"
                ></v-text-field>

                <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    class="mb-2"
                    clearable
                    label="Телефон"
                ></v-text-field>

                <v-text-field
                    v-model="streetName"
                    :rules="streetNameRules"
                    class="mb-2"
                    clearable
                    label="Улица"
                ></v-text-field>

                <v-text-field
                    v-model="buildingNumber"
                    :rules="buildingNumberRules"
                    class="mb-2"
                    clearable
                    label="Номер дома"
                ></v-text-field>

                <v-text-field
                    v-model="city"
                    :rules="cityRules"
                    clearable
                    label="Город"
                ></v-text-field>

                <v-text-field
                    v-model="zipcode"
                    :rules="zipcodeRules"
                    clearable
                    label="Код"
                ></v-text-field>
                <v-text-field
                    v-model="country"
                    :rules="countryRules"
                    class="mb-2"
                    clearable
                    label="Страна"
                ></v-text-field>
                <v-text-field
                    v-model="website"
                    :rules="websiteRules"
                    class="mb-2"
                    clearable
                    label="Сайт"
                ></v-text-field>
                <v-btn
                    class="me-3"
                    color="success"
                    :loading="loading"
                    :disabled="!form"
                    type="submit"
                >
                    Сохранить
                </v-btn>
                <v-btn
                    @click="back"
                >
                    Отмена
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: ['user'],
        data: () => ({
            form: null,
            loading: false,
            id: null,
            lastname: '',
            firstname: '',
            birthday: '',
            email: '',
            phone: '',
            gender: '',
            streetName: '',
            buildingNumber: '',
            city: '',
            zipcode: '',
            country: '',
            website: '',
            firstnameRules: [
                value => {
                    if (value) return true

                    return 'Имя обязательное поле'
                }
            ],
            lastnameRules: [
                value => {
                    if (value) return true

                    return 'Фамилия обязательное поле'
                }
            ],
            birthdayRules: [
                value => {
                    if (value) return true

                    return 'Дата рождения обязательное поле'
                },
                value => {
                    if (/[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/i.test(value)) return true

                    return 'Дата рождения неверна'
                }
            ],
            phoneRules: [
                value => {
                    if (value) return true

                    return 'Телефон обязательное поле'
                },
                value => {
                    if (value?.length > 9 && /[0-9-]+/.test(value)) return true

                    return 'Телефон неверный'
                }
            ],
            streetNameRules: [
                value => {
                    if (value) return true

                    return 'Улица обязательное поле'
                }
            ],
            buildingNumberRules: [
                value => {
                    if (value) return true

                    return 'Номер дома обязательное поле'
                }
            ],
            cityRules: [
                value => {
                    if (value) return true

                    return 'Город обязательное поле'
                }
            ],
            zipcodeRules: [
                value => {
                    if (value) return true

                    return 'ZIP код обязательное поле'
                }
            ],
            countryRules: [
                value => {
                    if (value) return true

                    return 'Страна обязательное поле'
                }
            ],
            websiteRules: [
                value => {
                    if (value) return true

                    return 'Сайт обязательное поле'
                },
                value => {
                    if (/^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i.test(value)) return true

                    return 'Сайт неверный'
                }
            ],
            emailRules: [
                value => {
                    if (value) return true

                    return 'E-mail обязательное поле'
                },
                value => {
                    if (/.+@.+\..+/.test(value)) return true

                    return 'E-mail неверный'
                }
            ],
        }),
        methods:{
            back(){
                this.$emit('cancelEditor')
            },
            save(){
                const self = this
                const user = {
                    id: this.id,
                    lastname: this.lastname,
                    firstname: this.firstname,
                    email: this.email,
                    phone: this.phone,
                    birthday: this.birthday,
                    gender: this.gender,
                    website: this.website,
                    address: {
                        streetName: this.streetName,
                        buildingNumber: this.buildingNumber,
                        city: this.city,
                        zipcode: this.zipcode,
                        country: this.country,
                    }
                };
                this.loading = true
                // имитация работы сервера
                function send() {
                    return new Promise((resolve, reject) => {
                        setTimeout(()=>{
                            let send= true
                            // если false, то будет ошибка
                            if (send){
                                self.$emit('updateUsers', user)
                                resolve()
                            } else {
                                reject('Error')
                            }
                        }, 1500)
                    });
                }
                send()
                    .then(() => {
                        self.back()
                    })
                    .catch((err) => {
                        alert(err)
                    })
                    .finally(() => {
                        self.loading = false
                    });
            }
        },
        mounted(){
            this.id = this.user.id
            this.lastname = this.user.lastname
            this.firstname = this.user.firstname
            this.email = this.user.email
            this.phone = this.user.phone
            this.birthday = this.user.birthday
            this.gender = this.user.gender
            this.streetName = this.user.address.streetName
            this.buildingNumber = this.user.address.buildingNumber
            this.city = this.user.address.city
            this.zipcode = this.user.address.zipcode
            this.country = this.user.address.country
            this.website = this.user.website
        },
    }
</script>

<style scoped>

</style>