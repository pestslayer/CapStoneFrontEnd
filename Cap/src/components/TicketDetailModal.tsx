import React from 'react';
import Modal from './Modal';

interface Ticket {
  id: string;
  customerName: string;
  custAddress: string;
  custNo: string;
  invoiceNo: string;
  serArea: string;
  instruct: string;
  service: string;
  appDate: string;
  timeIn: string;
  timeOut: string;
  temp: string;
  windDir: string;
  windSpeed: string;
  lic: string;
  sqft: string;
  sprayer: string;
  rate: string;
  target: string;
  product: string;
}

interface TicketDetailModalProps {
  ticket: Ticket | null;
  onClose: () => void;
}

const TicketDetailModal: React.FC<TicketDetailModalProps> = ({ ticket, onClose }) => {
  return (
    <Modal open={ticket !== null} onClose={onClose}>
      {ticket && (
        <div className="ticket-details p-6">
          <h2 className="text-2xl font-bold mb-4">Ticket Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <p>Customer Name: {ticket.customerName}</p>
            <p>Customer Address: {ticket.custAddress}</p>
            <p>Customer Number: {ticket.custNo}</p>
            <p>Invoice Number: {ticket.invoiceNo}</p>
            <p>Service Area: {ticket.serArea}</p>
            <p>Instructions: {ticket.instruct}</p>
            <p>Service Type: {ticket.service}</p>
            <p>Appointment Date: {ticket.appDate}</p>
            <p>Time In: {ticket.timeIn}</p>
            <p>Time Out: {ticket.timeOut}</p>
            <p>Temperature: {ticket.temp}</p>
            <p>Wind Direction: {ticket.windDir}</p>
            <p>Wind Speed: {ticket.windSpeed}</p>
            <p>License: {ticket.lic}</p>
            <p>Square Feet: {ticket.sqft}</p>
            <p>Sprayer: {ticket.sprayer}</p>
            <p>Rate: {ticket.rate}</p>
            <p>Target: {ticket.target}</p>
            <p>Product: {ticket.product}</p>
            <button  className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" onClick={window.print}>Print</button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default TicketDetailModal;






