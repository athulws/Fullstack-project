import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Subscription from './Components/Subscription';
import UnpaidInvoices from './Components/UnpaidInvoices';
import PaidInvoices from './Components/PaidInvoices';
import SupportTickets from './Components/SupportTickets';
import { Helmet } from 'react-helmet';
import NewTicket from './Components/NewTicket';
import PaymentTypes from './Components/PaymentTypes';
import NumberRepeat from './Components/NumberRepeat';
import ProductInformation from './Components/ProductInformation';
import OrderRedirect from './Components/OrderRedirect';
import PaymentSet from './Components/PaymentSet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet>
          <title>SAAS</title>
          {/* <meta
            name='description'
            content='IELTS Training by IELTS Master. We are the Best IELTS Coaching provider in India, specialized IELTS Preparation, IELTS Exams &amp; Courses.'
          />
          <meta name='keyword' content='IELTS coaching platform' />
          <link rel="canonical" href="https://www.ieltsmaster.com/"></link> */}
        </Helmet>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/user/subscriptions' element={<Subscription />} />
          <Route path='/user/unpaidinvoices' element={<UnpaidInvoices />} />
          <Route path='/user/invoices' element={<PaidInvoices />} />
          <Route path='/user/support' element={<SupportTickets />} />
          <Route path='/user/newticket' element={<NewTicket/>}/>
          {/* <Route path='/user/payment_types' element={<PaymentTypes/>} /> */}
          <Route path='/user/number_repeat' element={<NumberRepeat/>}/>
          <Route path='/user/product_information' element={<ProductInformation/>}/>
          <Route path='/user/order_redirect' element={<OrderRedirect/>}/>
          <Route path='/user/paymentSet' element={<PaymentSet/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
