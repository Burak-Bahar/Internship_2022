import { createRouter, createWebHistory } from 'vue-router'
import homePage from "@/views/homePage";
import loggedIn from "@/views/loggedIn";
import forgotPassword from "@/views/forgotPassword";
import resetPswd from "@/views/resetPswd";
import update_hotel from "@/views/update_hotel";
import registerHotel from "@/views/registerHotel";
import getAllHotels from "@/views/getAllHotels";
import hotelbyId from "@/views/HotelbyId";
import delete_hotel from "@/components/delete_hotel";
import displaySearchedHotels from "@/views/displaySearchedHotels";
import hotelInfoPage from "@/views/hotelInfoPage";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            children:[{
                path: '/',
                name: "homepage",
                component: homePage
            },
                {
                path: 'User',
                name: "loggedIn",
                component: loggedIn
            },{
                path: 'forgotPassword',
                name: "forgotPassword",
                component: forgotPassword
            },
            {
                path: 'resetPswd',
                name: "resetPswd",
                component: resetPswd
            },
            {
                path: 'registerHotel',
                name: "registerHotel",
                component: registerHotel
            },
            {
                path: 'getHotels',

                children:[
                    {
                        path: '',
                        name: "getAllHotels",
                        component: getAllHotels
                    },
                    {
                        path: 'hotelList',
                        name: "displaySearchedHotels",
                        component: displaySearchedHotels
                    }
                ]
            },
            {
                path: 'getHotel/updateHotel',
                name: "updateHotel",
                component: update_hotel
            },
            {
                path: 'getHotel',
                name: "getHotel",
                component: hotelbyId,
            },
            {
                path: 'deleteHotel',
                name: "deleteHotel",
                component: delete_hotel
            },
            {
                path: 'hotelInfo/:id',
                name: "hotelInfoPage",
                component: hotelInfoPage
            }
            ]
        }

    ],
})

/*
function getRole(){
    if(sessionStorage.length>0){
        let user =sessionStorage.getItem("user");
        user = JSON.parse(user)
        let role = user.user.role

        return (role ===  "admin")
    }
    else {
        return false
    }
}


function isUser(){
    return sessionStorage.length>0
}

var isAdmin = getRole()
var user = isUser()

router.beforeEach((to, from, next) => {
    const protectedPages = ["registerHotel", "updateHotel", "deleteHotel"]
    //const publicPages = ["getAllHotels", "displaySearchedhotels", "hotelInfoPage", "getHotel", "loggedIn", "homepage", "forgotPassword"]
    const LoggedInPages =["resetPswd"]
    if(to.name === "loggedIn" && from.name === "homepage"){
        isAdmin = getRole()
        user = isUser()
        next()
    }
    else {

        if(LoggedInPages.includes(to.name) && user === false){
            next({name: "homepage"})
            alert("Whose password are you trying to change. Log in first")
        }
        else{
            if (protectedPages.includes(to.name) && isAdmin === false) {
                next({name: "homepage"})
                alert("Your are not an Admin")
            }
            else{
                next()
            }

        }
    }



    //
      //protectedPages.includes(to.path)
                                // -- > sayfa
                                // --> next 401
})
*/
//export {router}