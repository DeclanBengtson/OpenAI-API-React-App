import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Configuration, OpenAIApi } from "openai";
import { useState, useMemo} from 'react';
import { AgGridReact } from "ag-grid-react";



//Chatgpt setup
const OPENAI_API_KEY ="";

export default function MealPlan() {
    const [rowData, setRowData] = useState([]);
    const [gridApi, setGridApi] = useState(null);

    const onGridReady = (params) => {
        setGridApi(params.api);
        params.api.sizeColumnsToFit();
      };
    //AG-grid column headers
    const columns = [
        { headerName: "Role", field: "category", sortable: true, filter:true },
       ]

    return (
        <div className='background'  style={{
            backgroundColor: '#202020',  height : '100vh'}}>
            <h2 className='Title'>Saved Plans</h2>
            <p className='para'>Contains a record of the Plans you have saved</p>
            <button type="button" class="btn btn-light" style={{marginRight:'10px'}}>Saved Meal Plans</button>
            <button type="button" class="btn btn-light" style={{marginLeft:'10px'}}>Saved exercise Plans</button>
            <p></p> 
            <div className='grid'>
            <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pagination={true}
            autoSizeAllColumns ={true}
            paginationPageSize={100}
            onGridReady={onGridReady}/>
        </div>
        </div>
    );
}
