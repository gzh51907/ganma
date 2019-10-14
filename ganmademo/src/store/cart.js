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
        // state: store中的state
        // payload：调用mutaion时传入的参数
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
        
        }
    },
    actions: {
 
    }
}

export default cart;