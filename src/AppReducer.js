import { initialState } from "./context";


export const AppReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_ROOMS_DATA":
         return { ...state, ...action.payload };
      case "FILTER_ROOMS":
         return {
            ...state, ...action.filterData
         };
      case "FILTER":
         return {
            ...state, sortedRooms: action.filter
         }
      case "SET_ORDER":
         return {
            ...state, orderList: [...state.orderList, action.payload]
         }
      case "TOGGLE_MANIPULATION":
         return {
            ...state,
            orderList: action.order
         }
      case "SET_ORDER_CALC":
         return {
            ...state,
            ...action.calc
         }
      default:
         return state;
   }
}