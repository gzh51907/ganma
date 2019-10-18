import axios from 'axios';


let cart = {
    state: {
        cartlist: [

        ], cartding: []

    },
    getters: {
        cartlength(state) {
            return state.cartlist.length;
        },
        cartbottom(state) {
            return state.cartding.length;
        },
        totali(state){
            return state.cartding.reduce((prev, item) => prev + item.price * item.num, 0)
        },
        totalPrice(state) {
   
            let total=0;
            state.cartlist.forEach(item => {
        
                if (item.check === true) {
                    console.log('aa:',item.price)
                    console.log('bb:', item.num)
                    console.log('cc:',total += item.price * item.num)
                    return total += item.price * item.num

                } else {

                }

            })
            // let total;
            // state.cartlist.reduce((prev, item) => {
            //     if (item.check == true) {
            //      console.log(prev)
            //         return total = prev + item.price * item.num

            //     } else {

            //     }

            // }, 0)
       
            return total/2

            // return state.cartlist.reduce((prev, item) => prev + item.price * item.num, 0)
        },

    },

    mutations: {
        add1cart(state, goods) {

            state.cartding.unshift(goods);

        },

        add2cart(state, goods) {

            state.cartlist.unshift(goods);

        },
        removeFromCart(state, id) {
            state.cartlist = state.cartlist.filter(item => item.id != id);
        },
        clearCart(state) {
            state.cartlist = [];
        },
        changeQty(state, { id }) {
            console.log('changeQty:', id, qty)

        },
        jia(state, id) {
            let user = JSON.parse(localStorage.getItem('user'))
            let username = user.username
            state.cartlist.forEach(async item => {
                if (item.id == id) {
                    item.num++
                    let data = await axios.post("http://106.53.2.52:5200/goods/dingdan", {
                        username,
                        id: id,
                        num: item.num

                    });

                }
            });


        },
        jian(state, id) {
            let user = JSON.parse(localStorage.getItem('user'))
            let username = user.username
            console.log(username)
            state.cartlist.forEach(async item => {
                if (item.id == id) {
                    item.num--
                    let data = await axios.post("http://106.53.2.52:5200/goods/dingdan", {
                        username,
                        id: id,
                        num: item.num

                    });


                    console.log(data)





                }
            });


        }
    },
    actions: {

    }
}

export default cart;