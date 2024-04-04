

import  { useState } from 'react';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import Modal from './Modal';
import TicketDetailModal from './TicketDetailModal';
import { useGetData } from '../custom-hooks/FetchData';
import { server_calls } from '../api/server';
import './../index.css';

const columns = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: "customerName", headerName: "Customer Name", flex: 1},
    { field: "custAddress", headerName: "Customer Address", flex: 1},
    { field: "custNo", headerName: "Customer Number", flex: 1},
    { field: "invoiceNo", headerName: "Invoice Number", flex: 1},
    { field: "serArea", headerName: "Service Area", flex: 1},
    { field: "instruct", headerName: "Instructions", flex: 1},
    { field: "service", headerName: "Service Type", flex: 1},
    { field: "appDate", headerName: "Appointment Date", flex: 1},
    { field: "timeIn", headerName: "Time In", flex: 1},
    { field: "timeOut", headerName: "Time Out", flex: 1},
    { field: "temp", headerName: "Temperature", flex: 1},
    { field: "windDir", headerName: "Wind Direction", flex: 1},
    { field: "windSpeed", headerName: "Wind Speed", flex: 1},
    { field: "lic", headerName: "License", flex: 1},
    { field: "sqft", headerName: "Square Feet", flex: 1},
    { field: "sprayer", headerName: "Sprayer", flex: 1},
    { field: "rate", headerName: "Rate", flex: 1},
    { field: "target", headerName: "Target", flex: 1},
    { field: "product", headerName: "Product", flex: 1},
];

const DataTable = () => {
    const { inventoryData, getData } = useGetData();
    const [open, setOpen] = useState<boolean>(false);
    const [selectedTicket, setSelectedTicket] = useState<any | null>(null);
    const [selectionModel, setSelectionModel] = useState<string[]>([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRowClick = (params: GridRowParams) => {
        const selectedRow = inventoryData.find(row => row.id === params.id);
        setSelectedTicket(selectedRow);
    };

    const deleteData = () => {
        selectionModel.forEach(itemId => {
            server_calls.delete(itemId).then(() => {
                console.log(`Deleted item with ID: ${itemId}`);
            }).catch(error => {
                console.error(`Error deleting item with ID ${itemId}:`, error);
            });
        });
        getData();
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="dashpage flex justify-center">
                <div>
                    <button
                        className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                        onClick={handleOpen}
                    >
                        Create New Ticket
                    </button>
                </div> 
                <button 
                    onClick={handleOpen} 
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                >
                    Update
                </button>
                <button 
                    onClick={deleteData} 
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                >
                    Delete
                </button>
            </div>
            <div 
                className={open ? "hidden" : "container mx-auto my-5 flex flex-col"} 
                style={{ height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">My Tickets</h2>
                <DataGrid 
                    rows={inventoryData} 
                    columns={columns} 
                    checkboxSelection={true} 
                    onSelectionModelChange={(item: any) => {
                        setSelectionModel(item);
                    }}
                    onRowClick={handleRowClick} 
                />
            </div>
            <TicketDetailModal ticket={selectedTicket} onClose={handleClose} />
        </>
    );
};

export default DataTable;
