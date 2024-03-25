import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import {  useDispatch, useStore } from "react-redux"
import { chooseCustomerName, chooseCustAddress, chooseCustNo, chooseInvoiceNo, chooseSerArea, chooseInstruct, chooseService, chooseAppDate, chooseTimeIn, chooseTimeOut, chooseTemp, chooseWindDir, chooseWindSpeed, chooseLic, chooseSqft, chooseSprayer, chooseRate, chooseTarget, chooseProduct } from "../redux/slices/RootSlices"
import './../index.css'

interface TicketFormProps {
  id?: string[];
  onClose: () => void;
}

const TicketForm = ( props:TicketFormProps) => {
  const { register, handleSubmit,} = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      setTimeout( () => {window.location.reload()}, 500)
      console.log(`updated: ${data.first} ${props.id}`)
    } else {
      dispatch(chooseCustomerName(data.customerName));
      dispatch(chooseCustAddress(data.custAddress));
      dispatch(chooseCustNo(data.custNo));
      dispatch(chooseInvoiceNo(data.invoiceNo));
      dispatch(chooseSerArea(data.serArea));
      dispatch(chooseInstruct(data.instruct));
      dispatch(chooseService(data.service));
      dispatch(chooseAppDate(data.appDate));
      dispatch(chooseTimeIn(data.timeIn));
      dispatch(chooseTimeOut(data.timeOut));
      dispatch(chooseTemp(data.temp));
      dispatch(chooseWindDir(data.windDir));
      dispatch(chooseWindSpeed(data.windSpeed));
      dispatch(chooseLic(data.lic));
      dispatch(chooseSqft(data.sqft));
      dispatch(chooseSprayer(data.sprayer));
      dispatch(chooseRate(data.rate));
      dispatch(chooseTarget(data.target));
      dispatch(chooseProduct(data.product));
      console.log(data + 'here')

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000)
      event.target.reset()
  
      props.onClose();
    } 
    
  }

  return (
    <div className="modal-content flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <h1 className="inv text-2xl mb-4 font-bold">Ticket</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
            <input {...register('customerName')} name='customerName' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="custAddress" className="block text-sm font-medium text-gray-700">Customer Address</label>
            <input {...register('custAddress')} name='custAddress' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="custNo" className="block text-sm font-medium text-gray-700">Customer Number</label>
            <input {...register('custNo')} name='custNo' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="invoiceNo" className="block text-sm font-medium text-gray-700">Invoice Number</label>
            <input {...register('invoiceNo')} name='invoiceNo' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="serArea" className="block text-sm font-medium text-gray-700">Service Area</label>
            <input {...register('serArea')} name='serArea' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="instruct" className="block text-sm font-medium text-gray-700">Instructions</label>
            <input {...register('instruct')} name='instruct' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Type</label>
            <input {...register('service')} name='service' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="appDate" className="block text-sm font-medium text-gray-700">Appointment Date</label>
            <input {...register('appDate')} name='appDate' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="timeIn" className="block text-sm font-medium text-gray-700">Time In</label>
            <input {...register('timeIn')} name='timeIn' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="timeOut" className="block text-sm font-medium text-gray-700">Time Out</label>
            <input {...register('timeOut')} name='timeOut' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="temp" className="block text-sm font-medium text-gray-700">Temperature</label>
            <input {...register('temp')} name='temp' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="windDir" className="block text-sm font-medium text-gray-700">Wind Direction</label>
            <input {...register('windDir')} name='windDir' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="windSpeed" className="block text-sm font-medium text-gray-700">Wind Speed</label>
            <input {...register('windSpeed')} name='windSpeed' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="lic" className="block text-sm font-medium text-gray-700">License</label>
            <input {...register('lic')} name='lic' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="sqft" className="block text-sm font-medium text-gray-700">Square Feet</label>
            <input {...register('sqft')} name='sqft' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="sprayer" className="block text-sm font-medium text-gray-700">Sprayer</label>
            <input {...register('sprayer')} name='sprayer' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rate</label>
            <input {...register('rate')} name='rate' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="target" className="block text-sm font-medium text-gray-700">Target</label>
            <input {...register('target')} name='target' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product</label>
            <input {...register('product')} name='product' type="text" className="form-input rounded-md shadow-sm mt-1 block w-full" />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-gray-400 hover:bg-slate-800 text-black font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
  
  
}

export default TicketForm
