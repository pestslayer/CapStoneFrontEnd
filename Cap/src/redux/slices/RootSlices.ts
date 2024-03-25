import { createSlice } from '@reduxjs/toolkit'


const rootSlice = createSlice({
    name: 'Root',
    initialState: {
        customerName: "CustomerName",
        custAddress: 'CustAddress',
        custNo: 'CustNo',
        invoiceNo: "InvoiceNo",
        serArea: "SerArea",
        instruct: 'Instruct',
        service: 'Service',
        appDate: 'AppDate',
        timeIn: 'TimeIn',
        timeOut: 'TimeOut',
        temp: 'Temp',
        windDir: 'WindDir',
        windSpeed: 'WindSpeed',
        lic: 'Lic',
        sqft: 'sqft',
        sprayer: 'Sprayer',
        rate: 'Rate',
        target: 'Target',
        product: 'Product'
    },
    reducers: {
        chooseCustomerName: (state, action) => { state.customerName = action.payload},
        chooseCustAddress: (state, action) => { state.custAddress = action.payload},
        chooseCustNo: (state, action) => { state.custNo = action.payload},
        chooseInvoiceNo: (state, action) => { state.invoiceNo =action.payload},
        chooseSerArea: ( state, action) => { state.serArea = action.payload},
        chooseInstruct: ( state, action) => { state.instruct = action.payload},
        chooseService: ( state, action) => { state.instruct = action.payload},
        chooseAppDate: ( state, action) => { state.appDate = action.payload},
        chooseTimeIn: ( state, action) => { state.timeIn = action.payload},
        chooseTimeOut: ( state, action) => { state.timeOut = action.payload},
        chooseTemp: ( state, action ) => { state.temp = action.payload},
        chooseWindDir: ( state, action) => { state.windDir = action.payload},
        chooseWindSpeed: ( state, action ) => { state.windSpeed = action.payload},
        chooseLic: ( state, action ) => { state.lic = action.payload},
        chooseSqft: (state, action ) => {state.sqft = action.payload},
        chooseSprayer: (state, action) => {state.sprayer = action.payload},
        chooseRate: ( state,action) => {state.rate = action.payload},
        chooseTarget: ( state, action) => {state.target = action.payload},
        chooseProduct: ( state,action) => {state.product = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCustomerName, chooseCustAddress,chooseCustNo,chooseInvoiceNo, chooseSerArea, chooseInstruct,
    chooseService, chooseAppDate, chooseTimeIn, chooseTimeOut, chooseTemp,  chooseWindDir, chooseWindSpeed, chooseLic,
    chooseSqft,chooseSprayer, chooseRate, chooseTarget,  chooseProduct } = rootSlice.actions