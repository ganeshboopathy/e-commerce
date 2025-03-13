import { createSlice } from "@reduxjs/toolkit";
import { data_e_commerce } from '../data/data'
import Swal from 'sweetalert2'

const CardSLice = createSlice({
    name: "card",
    initialState: [],
    reducers: {
        addCard(state, action) {
            let existingProduct = state.find((item) => item.id === action.payload);
            if (!existingProduct) {  // Only add if item is not already in the cart
                let card_product = data_e_commerce.find((iteam) => iteam.id === action.payload);
                if (card_product) {
                    state.push(card_product);
                    Swal.fire({
                        title: "add card successfully ",
                        icon: "success",
                        draggable: true
                      });
                }
            }
            else if( existingProduct){
                Swal.fire({
                    title: "add card one time only",
                    icon: "error",
                    draggable: true
                  });

            }
        },
        removeCard(state, action) {
            Swal.fire({
                title: " Card removed successfully ",
                icon: "success",
                draggable: true
              });            
        return state.filter((item) => item.id != action.payload)

        },
        count(state){
            return state.length
        }

    }
})
export default CardSLice.reducer
export let { addCard, removeCard } = CardSLice.actions