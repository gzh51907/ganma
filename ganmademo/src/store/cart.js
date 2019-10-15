import axios from 'axios';


let cart = {
    state: {
        cartlist: [
       
        ]
    },
    getters: {
        cartlength(state) {
            return state.cartlist.length;
        },
    
    },

    mutations: {
     
       add2cart(state, goods) {
      
            state.cartlist.unshift(goods);
            
        },
        removeFromCart(state, id) {
            state.cartlist = state.cartlist.filter(item => item.id != id);
        },
        clearCart(state) {
            state.cartlist = [];
        },
        changeQty(state, { id}) {
            console.log('changeQty:', id, qty)
        
        },
        jia(state, id) {
            let user =JSON.parse(localStorage.getItem('user'))
            let username=user.username
            console.log(username)
            state.cartlist.forEach(async item => {
                    if(item.id==id){
                        item.num++
                       let data= await axios.post("http://localhost:5200/goods/dingdan", {
                           username,
                                id: id,
                                num:item.num
                            
                        });


                        console.log(data)





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
                    let data = await axios.post("http://localhost:5200/goods/dingdan", {
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