import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid'; 
import { BsTrash } from 'react-icons/bs'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function HorizontalMarginStartExample() {
  const [showLedgerModal, setShowLedgerModal] = useState(false);
  const [ledgerRows, setLedgerRows] = useState([]);
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [showAllExpenses, setShowAllExpenses] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCreditModalOpen = () => setShowCreditModal(true);
  const handleCreditModalClose = () => setShowCreditModal(false);

  const handleLedgerModalOpen = () => setShowLedgerModal(true);
  const handleLedgerModalClose = () => setShowLedgerModal(false);

  const addLedgerRow = () => {
    const newRow = { id: uuidv4() };
    setLedgerRows([newRow, ...ledgerRows]);
  };

  const removeLedgerRow = (id) => {
    setLedgerRows(ledgerRows.filter(row => row.id !== id));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div className="Top-box">
        <Stack direction="horizontal" gap={3} className="p-3 border border-dark rounded bg-white">
          <div className="p-2 item first-item">Petty Cash</div>
          <div className="p-2 item ms-auto second-item">Expenses</div>
          <div className="p-2 item third-item">Expense Management</div>
          <div className="p-2 item fourth-item">Petty Cash</div>
        </Stack>
      </div>
      <div className="mt-3">
        <Button variant="primary" className="button-margin" onClick={handleCreditModalOpen}>Credit Amount</Button>
        <Button variant="primary" onClick={handleLedgerModalOpen}>Add to Ledger</Button>
      </div>

      {/* Modal for Credit Amount */}
      <Modal show={showCreditModal} onHide={handleCreditModalClose} centered size='lg' dialogClassName='custom-modal-dialog'>
        <Modal.Header closeButton></Modal.Header>  
        <Modal.Body className='credit-form'>
          <div className="row mt-5 mb-4">
            <div className="col">
              <Form.Label>Zone</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Zone</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Zone</Dropdown.Item>
                  <Dropdown.Item>Zone</Dropdown.Item>
                  <Dropdown.Item>Zone</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <Form.Label>Branch</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Branch</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Branch 1</Dropdown.Item>
                  <Dropdown.Item>Branch 2</Dropdown.Item>
                  <Dropdown.Item>Branch 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <Form.Label>Academic year</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select year</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>2024-2025</Dropdown.Item>
                  <Dropdown.Item>2023-2024</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {/* Your remaining form elements */}
            {/* Horizontal Line */}
            <hr />
            {/* 2nd Row */}
            <div className="row mb-5 mt-5">
              <div className="col ml-5 mr-5">
                <p>Payment Mode</p>
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="dropdown-toggle">Cash</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Cash</Dropdown.Item>
                    <Dropdown.Item>Cheque</Dropdown.Item>
                    <Dropdown.Item>Online</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col ml-5 mr-5">
                <p>Amount</p>
                <Form.Control as="textarea" rows={1} placeholder="Amount" />
              </div>
              <div className="col ml-5 mr-5">
                <p>To</p>
                <Form.Control as="textarea" rows={1} placeholder="" />
              </div>
              <div className="col ml-5 mr-5">
                <p>Approved by</p>
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="dropdown-toggle">Select type</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Warden</Dropdown.Item>
                    <Dropdown.Item>Principal</Dropdown.Item>
                    <Dropdown.Item>Lecturer</Dropdown.Item>
                    <Dropdown.Item>Accountant</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {/* 3rd Row */}
            <div className="row mb-5 mt-6">
              <p>Date</p>
              <div className="col ml-5 mr-5">
              
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd MMM yyyy"
                    className="form-control"
                    placeholderText="!8 Nov 2022"
                  />
              
              </div>
              <div className="col ml-5 mr-5">
                <Form.Control as="textarea" rows={2} placeholder="Remarks" />
              </div>
              <div className="col ml-5 mr-5">
              </div>
            </div>
            {/* Submit Button */}
            <div className="row justify-content-end mt-4">
              <div className="col-auto">
                <Button variant="primary">Submit</Button>
              </div>
            </div>
              </Modal.Body>
      </Modal>

      {/* Modal for Add to Ledger */}
      <Modal show={showLedgerModal} onHide={handleLedgerModalClose} centered size='lg' >
        <Modal.Header closeButton></Modal.Header> 
        <Modal.Body className='ledger-form'>
          {/* Existing static rows (Zone, Branch, Academic Year) */}
          <div className="row mb-4 mt-5">
            <div className="col">
              <Form.Label>Zone</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Zone</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Zone</Dropdown.Item>
                  <Dropdown.Item>Zone</Dropdown.Item>
                  <Dropdown.Item>Zone</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <Form.Label>Branch</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Branch</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Branch 1</Dropdown.Item>
                  <Dropdown.Item>Branch 2</Dropdown.Item>
                  <Dropdown.Item>Branch 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <Form.Label>Academic year</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Year</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>2024-2025</Dropdown.Item>
                  <Dropdown.Item>2023-2024</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {/* Your remaining form elements */}
          {/* Horizontal Line */}
          <hr />
            {/* 2nd Row */}
            <div className="row mb-5 mt-4">
              <div className="col ml-5 mr-5">
                <p>Payment Mode</p>
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="dropdown-toggle">Cash</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Cash</Dropdown.Item>
                    <Dropdown.Item>Cheque</Dropdown.Item>
                    <Dropdown.Item>Online</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col ml-5 mr-5">
                <p>Amount</p>
                <Form.Control as="textarea" rows={1} placeholder="Amount" />
              </div>
              <div className="col ml-5 mr-5">
                <p>To</p>
                <Form.Control as="textarea" rows={1} placeholder="" />
              </div>
              <div className="col ml-5 mr-5">
                <p>Approved by</p>
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="dropdown-toggle">Select type</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Warden</Dropdown.Item>
                    <Dropdown.Item>Principal</Dropdown.Item>
                    <Dropdown.Item>Lecturer</Dropdown.Item>
                    <Dropdown.Item>Accountant</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {/* 3rd Row */}
            <div className="row mb-7 mt-7">
              <div className="col ml-5 mr-5">
                <Button variant="light">Select Date</Button>
              </div>
              <div className="col ml-5 mr-5">
                <Form.Control as="textarea" rows={2} placeholder="Remarks" />
              </div>
            </div>
            {/* Submit Button */}
            <div className="row justify-content-end mt-4">
              <div className="col-auto">
                <Button variant="primary">Submit</Button>
              </div>
            </div>
              </Modal.Body>
      </Modal>
      

      {/* Modal for Add to Ledger */}
      <Modal show={showLedgerModal} onHide={handleLedgerModalClose} centered size='lg'>
        <Modal.Body className='ledger-form'>
          {/* Existing static rows (Zone, Branch, Academic Year) */}
          <div className="row mb-4 mt-5">
            <div className="col">
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Zone</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Zone</Dropdown.Item>
                  <Dropdown.Item>Zone</Dropdown.Item>
                  <Dropdown.Item>Zone</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Branch</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Branch 1</Dropdown.Item>
                  <Dropdown.Item>Branch 2</Dropdown.Item>
                  <Dropdown.Item>Branch 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select Year</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>2024-2025</Dropdown.Item>
                  <Dropdown.Item>2023-2024</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {/* Horizontal Line */}
          <hr />
          <div className="row mt-4 mb-4">
            <div className="col ml-5 mr-5 d-flex align-items-end justify-content-end">
              <Button variant="primary" onClick={addLedgerRow} >Add Expense Ledger</Button>
            </div>
          </div>
          <div className='col mt-4 mb-3' >
              <Stack direction="horizontal" gap={5} className="p-1 border border-dark rounded bg-white">
                <div className="p-2 item">Ledger type</div>
                <div className="p-2 item">Ledger account</div>
                <div className="p-2 item">Nature of Expense</div>
                <div className="p-2 item">Amount</div>
                <div className="p-2 item">Balance</div>
              </Stack>
          </div>
          <div className="row mt-4 mb-4">
            <div className='col'>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select type</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Expenses</Dropdown.Item>
                  <Dropdown.Item>Liability</Dropdown.Item>
                  <Dropdown.Item>Asset</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className='col'>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select name</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Ledger name 1</Dropdown.Item>
                  <Dropdown.Item>Ledger name 2</Dropdown.Item>
                  <Dropdown.Item>Ledger name 3</Dropdown.Item>
                  <Dropdown.Item>Ledger name 4</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className='col'>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Expense</Dropdown.Toggle>
                <Dropdown.Menu style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {/* Render only first 5 items initially */}
                  {expenses.slice(0, 5).map((item, index) => (
                    <Dropdown.Item key={index}>{item}</Dropdown.Item>
                  ))}
                  {/* Add a button to reveal remaining items */}
                  {showAllExpenses && expenses.slice(5).map((item, index) => (
                    <Dropdown.Item key={index}>{item}</Dropdown.Item>
                  ))}
                  {!showAllExpenses && <Dropdown.Item onClick={() => setShowAllExpenses(true)}>Show All</Dropdown.Item>}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className='col'>
              <Form.Control as="textarea" rows={1} placeholder="Rs 00000" /> 
            </div>
          </div>

          {/* Ledger Rows */}
          <div className="table-responsive">
            <table className="table">
              <tbody>
                {ledgerRows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" className="dropdown-toggle">Select type</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Expenses</Dropdown.Item>
                          <Dropdown.Item>Liability</Dropdown.Item>
                          <Dropdown.Item>Asset</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" className="dropdown-toggle">Select name</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Ledger name 1</Dropdown.Item>
                          <Dropdown.Item>Ledger name 2</Dropdown.Item>
                          <Dropdown.Item>Ledger name 3</Dropdown.Item>
                          <Dropdown.Item>Ledger name 4</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" className="dropdown-toggle">Expense</Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: '300px', overflowY: 'auto' }}>
                          {expenses.map((item, index) => (
                            <Dropdown.Item key={index}>{item}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Form.Control as="textarea" rows={1} placeholder="Rs 00000" />
                    </td>
                    <td></td>
                    <td>
                      <Button variant="danger" onClick={() => removeLedgerRow(row.id)}>
                        <BsTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <hr />
          {/* Approved by and Attachment */}
          <div className="row mb-5 mt-5">
            <div className="col">
              <p>Approved by</p>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="dropdown-toggle">Select type</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Warden</Dropdown.Item>
                  <Dropdown.Item>Principal</Dropdown.Item>
                  <Dropdown.Item>Lecturer</Dropdown.Item>
                  <Dropdown.Item>Accountant</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Attachment</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-auto">
              <Button variant="primary">Save</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// Sample list of expenses
const expenses = [
  "BIE expenditure",
  "BIE examination fee",
  "BIE Recognition fee",
  "BIE Affiliation fee",
  "Practical Lab Equipment",
  "First Aid Kit or General medicines",
  "Tea and Coffee",
  "Detergent and Cleaning items",
  "Snacks",
  "Stationary",
  "Pooja essentials",
  "Labour Charges",
  "Transport Charges",
  "Fuel Conveyance",
  "Generator / AC / Fan / Electrical Maintenance",
  "Xerox / Printing",
  "Stationary or Postages",
  "Newspaper and Journals",
  "Telephone Bill",
  "Internet Bill",
  "Water Bill",
  "Electricity Bill"
  // Add more expenses as needed
];

export default HorizontalMarginStartExample;

