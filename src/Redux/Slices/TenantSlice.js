import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const url = 'https://www.prop.faspro24.com/api/tenant/GetTenantListById';

const obj = [
    {
        name: "John",
        lastName: "Doe",
        gender: "Male",
        id_num: "VH234",
        phone_num: "082700150",
        email: "example@gmail.com",
        unit: "Preston",
        editBtn: <button className="btn report-primary text-white"
            onClick={() => history.push(`/add-property`)}>Edit</button>,
        deleteBtn: <button className="btn report-danger text-white"
            onClick={() => console.log("delete")}>Delte</button>,
    }
]

const initialState = {
    tenant: [],
    amount: 6,
    total: 0,
    isLoading: true,
};

export const getAllTenant = createAsyncThunk('tenant/getAllTenant', async () => {
    try {
        const res = await fetch(`http://prop.faspro24.com/api/tenant/GetTenantListById`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "TenantID": 1 }),
        })
    } catch (error) {
        console.log("Error", error.message);
    }
});

const tenantSlice = createSlice({
    name: 'tenant',
    initialState, // state
    reducers: {},

    extraReducers: {
        [getAllTenant.pending]: (state, action) => {
            state.isLoading = true
        },

        [getAllTenant.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.tenant = payload // here am passing the data from the API to to my initial state call [tenant]
        },

        [getAllTenant.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export const allTenant = (state) => state.tenant.tenant
export const isLoading = (state) => state.tenant.isLoading
// export const { ClearCart, removeItem, increase, decrease, calculateTotals } = tenantSlice.actions;

// Export Slice
export default tenantSlice.reducer;



/**********************************************************************
reducers: {
    ClearCart: (state) => {
        state.cartItem = []; // empty the state
        state.amount = 0
    },

    removeItem: (state, action) => {
        console.log(action);
        const id = action.payload; console.log(id); // action payload it is the ID 
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },

    increase: (state, { payload }) => {
        console.log(payload);

        const cartItem = state.cartItem.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, { payload }) => {
        const cartItem = state.cartItem.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount - 1;
    },

    calculateTotals: (state) => {
        console.log(state);
        let amount = 0;
        let total = 0;
        state.cartItem.forEach((item) => {
            amount += item.amount;
            total += item.amount * item.price;
        });
        state.amount = amount;
        state.total = total;
    },
},
********************************************/