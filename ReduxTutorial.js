//  console.log('inside reduxtut');
const redux = require('redux');
const createStore = redux.createStore;

const BUY_ICE_CREAM = 'BUY_ICE_CREAM';
const BUY_CAKE = 'BUY_CAKE';

//action creator
const buycake = cake => {
    return {
        type: BUY_CAKE,
        payload: cake
    }
}

const buyicecream = iceCreams => {
    return {
        type: BUY_ICE_CREAM,
        payload: iceCreams
    }
}


//manually enstating the initial state
const initialState = {
    cake : [

            {
            name: "Strawberry Delight",
            id: 1,
            price: 200,
            flavour: "Strawberry"
            },
            {
            id: 2,
            name: "Chocolate Heaven",
            price: 400,
            flavour: "Dark Chocolate"
            },
            {
            id: 3,
            name: "WhiteWalker",
            price: 500,
            flavour: "Vanilla + Berry"
            }
        ],
    iceCreams: [
            {
            name: "Strawberry Delight",
            id:1,
            price: 200,
            flavour: "Strawberry"
            },
            {
            id:2,
            name: "Chocolate Heaven",
            price: 400,
            flavour: "Dark Chocolate"
            },
            {
            id:3,
            name: "White walker",
            price: 500,
            flavour: "Vanilla + Berry"
            }
        ]
}

//reducer function defined
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            cake: action.payload
        }

        case BUY_ICE_CREAM: return {
            ...state,
            iceCreams: action.payload
        }

        default: return state
    }
}


const cakeBuyAction = (id) => {
    const cake = initialState.cake.filter(element => element.id !== id);
    return buycake(cake);
}
const iceCreamBuyAction = (id) => {
    const iceCreams = initialState.iceCreams.filter(element => element.id !== id);
    return buyicecream(iceCreams);
    }



//creating the redux store
const store = createStore(reducer);

console.log('initial state',store.getState());

//setting up a listener that looks out for any change in the state
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

//dispatching our first action which directs it the reducer where the reducer matches it's name with the 
// cases available inside the reducer
// console.log(cakeBuyAction(2));
store.dispatch(cakeBuyAction(2));
store.dispatch(iceCreamBuyAction(1));

//finally we're unsubscribing the listener
unsubscribe();

//we can see that this statement does not work because the listener has already been unsubscribed
store.dispatch(buycake());