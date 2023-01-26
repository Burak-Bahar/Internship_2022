import { createStore } from 'vuex'
import axios from 'axios'
import {router} from "@/router/router";
//lets make all axıos functions in here

const base_Url = 'http://localhost:3000/v1'
/*let hoteltype =  {
        id:"",
        name: "",
        description: "",
        location: "",
        checkInTime: "",
        checkOutTime: "",
        features: []
}*/
export default createStore({

    state: {
        temp: [],
        cur_user: {
            user: {
                id: "",
                email: "",
                name: "",
                role: ""
            },
            tokens: {
                access: {
                    token: "",
                    expires: ""
                },
                refresh: {
                    token: "",
                    expires: ""
                }
            }
        },

        hotel:  {
            id:"",
            name: "",
            description: "",
            location: "",
            checkInTime: "",
            checkOutTime: "",
            features: []
        },
        hotelFound : false,
        hotelList: []

    },
    mutations: {
        resetHotelSearch(state){
            state.hotelFound = false
        },
        UserData(state,data){
            state.cur_user = data
            sessionStorage.setItem('user', JSON.stringify(state.cur_user))
            sessionStorage.setItem('token', state.cur_user.tokens.access.token)
        },
        HotelData(state,data){
            state.hotel = data
            state.hotelFound = true
        },
        RegData(state,data){
            state.hotel = data
            state.hotelFound = true
            router.push({name: 'hotelInfoPage', params:{id : state.hotel.id}})
        },
        deleteUserInfo(state){
            state.cur_user.user.id = ""
            state.cur_user.user.name = ""
            state.cur_user.user.role = ""
            state.cur_user.user.email = ""
            state.cur_user.tokens.refresh.token = ""
            state.cur_user.tokens.refresh.expires = ""
            state.cur_user.tokens.access.expires = ""
            state.cur_user.tokens.access.token = ""
            state.Admin = true
            state.hotel.id = ""
        },
        hotelList(state, data){
            state.hotelList = data.data.results
            console.log(state.hotelList)
            router.push({name: 'displaySearchedHotels'})
        }
    },
    actions: {
        userIdentification_reg(context, data){console.log(data)
            let y = JSON.parse(data)
            let x = base_Url + '/auth/register'
            console.log(x)
            const instance = axios.create()
            instance.interceptors.response.use(function (response){
                context.commit('UserData', response.data)
                //context.dispatch('keepAdmin')
                router.push({name : 'loggedIn'})
            })
            instance.post(x, {name : y.name, email: y.email ,password: y.password }, {headers:{'Content-Type': 'application/json', 'accept': 'application/json'}} )
                .catch(alert("Register Failed"))
        },
        userIdentification_log(context, params){console.log(params)
            let y = JSON.parse(params)
            let x = base_Url + '/auth/login'
            console.log(x)
            const instance = axios.create()
            instance.interceptors.response.use(function (response){
                context.commit('UserData', response.data)
               // context.dispatch('keepAdmin')
                router.push({name : 'loggedIn'})
            })
            instance.post(x, { email: y.email, password: y.password }, {headers: { 'Content-Type': 'application/json', 'accept': 'application/json'}})
                .catch(response => alert(response))
        },
        logOut(context){
            let x = base_Url + '/auth/logout'
            console.log(x)
            let y = sessionStorage.getItem('user')
            sessionStorage.clear()
            let z = JSON.parse(y)
            context.commit('deleteUserInfo')
            axios.post(x, { refreshToken : z.tokens.refresh.token }, {headers: { 'Content-Type': 'application/json', 'accept': '*/*'}})
                .then(response => console.log(response))
                .catch(response => alert(response))
            router.push({name: "homepage"})
        },
        registerHotel(context, data){
            console.log(data)
            let y = JSON.parse(data)
            let x = base_Url + '/hotels'
            console.log(y.name)
            let token = sessionStorage.getItem('token')
            axios.post(x, {name: y.name, description: y.description, location: y.location, checkInTime: y.checkInTime, checkOutTime: y.checkOutTime, features: y.features}
            , {headers: {'accept': 'application/json',
                    'Authorization': 'Bearer ' + token ,
                    'Content-Type': 'application/json' }})
                .then( res =>  context.commit('RegData', res.data ),
                    alert("Hotel created")
                )
                .catch(response => alert(response))
        },
        getHotelList(context, data){
            const myUrlWithParams = new URL(base_Url + '/hotels');
            if ( data.hotel_name){
                myUrlWithParams.searchParams.append("name", data.hotel_name);
            }
            if ( data.hotel_des ){
                myUrlWithParams.searchParams.append("description", data.hotel_des);
            }
            if ( data.hotel_loc ){
                myUrlWithParams.searchParams.append("location", data.hotel_loc);
            }
            if ( data.sortBy ){
                myUrlWithParams.searchParams.append("sortBy", data.sortBy);
            }
            if ( data.limit ){
                myUrlWithParams.searchParams.append("limit", data.limit);
            }
            if ( data.page ){
                myUrlWithParams.searchParams.append("page", data.page);
            }
            console.log(myUrlWithParams.href);
            let token = sessionStorage.getItem('token')
            axios.get( myUrlWithParams.href , {headers:{'accept': 'application/json', 'Authorization': 'Bearer ' + token}})
                .then(response => context.commit('hotelList', response))
                .catch(response => alert(response))
        },
            getHotel(context, data){
            let x = base_Url + '/hotels/' + data
            let token = sessionStorage.getItem('token')
            axios.get(x, { headers:{'accept': 'application/json',
                    'Authorization': 'Bearer ' + token }})
                .then(response => context.commit('HotelData', response.data)).catch(response => alert(response))
        },
        forgot_password(context, data){
            let x = base_Url + '/auth/forgot-password'
            axios.post(x, {email: data}, {headers:{'Content-Type': 'application/json', 'accept': '*/*'}}).catch(response => alert(response))
        },
        reset_password(context, data){
            let y = JSON.parse(data)
            const myUrlWithParams = new URL(base_Url + '/auth/reset-password');
            myUrlWithParams.searchParams.append("token", y.token);
            console.log(myUrlWithParams.href)
            axios.post(myUrlWithParams.href, {"password": y.password}, {headers:{'Content-Type': 'application/json', 'accept': '*/*'}})
                .catch(response => alert(response))

        },
        delete_hotel(context, data){
            let token = sessionStorage.getItem('token')
            let x = base_Url + '/hotels/' + data
            console.log(x)
            axios.delete(x, {headers:{'accept': '*/*', 'Authorization': 'Bearer ' + token }})
                .then( alert("Deletion is succesfull"))
                .catch(response => alert(response))
            router.push({name : "getAllHotels"})
        },
        updateHotel({dispatch}, data){
            dispatch('getHotel', data.id)
            let x = base_Url + '/hotels/' + data.id
            let token = sessionStorage.getItem('token')

           /* if(data.name === ''){
                data.name = context.state.hotel.name
            }
            if(data.description === ''){
                data.description = context.state.hotel.description
            }
            if(data.location === ''){
                data.location = context.state.hotel.location
            }
            if(data.checkInTime === ''){
                data.checkInTime = context.state.hotel.checkInTime
            }
            if(data.checkOutTime === ''){
                data.checkOutTime = context.state.hotel.checkOutTime
            }
            if(data.features === ''){
                data.features = context.state.hotel.features
            }*/

            /*
            /update/11111


            // UPDATE HOTEL VİEWS

            creatad(){
                getHotel(111111) -> action
                    > mutaion ->setHpteş (state.hotel)

                Burak -> Mustafa
                state.hotel.name => mustafa

                State.hotel
            }

            */
            axios.put(x, { id : data.id, name : data.name, description: data.description, location: data.location, checkInTime: data.checkInTime, checkOutTime: data.checkOutTime,
            features: data.features}, {headers: {'accept': 'application/json','Authorization': 'Bearer ' + token , 'Content-Type': 'application/json' }})
                .then(response => console.log(response))
                .catch(response => alert(response))
        }
    },
    getters: {
        IsAdmin() {
            if (sessionStorage.length > 0) {
                let y = sessionStorage.getItem('user')
                y = JSON.parse(y)
                return (y.user.role === "admin")
            }
        },
        LoggedIn() {
            return sessionStorage.getItem('user')
        }
    }
})