import { useLocation } from 'react-router-dom';
import axios from 'axios';
import qr from "../assets/qr.jpg";

// Sample URLs for payment option icons
const upiIcon = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png';
const phonePeIcon = 'https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text.png';
const googlePayIcon = 'https://i.pinimg.com/550x/f6/60/a6/f660a637c5ea8ef2b00218bac3479c82.jpg';
const razorpayIcon = 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Razorpay_logo.webp';

const BuyDetail = () => {
  const location = useLocation();
  const { bird } = location.state; // Access the passed bird data

  const paymentHandler = async () => {
    const amount = 500;
    const currency = 'INR';
    const receiptId = '1234567890';

    try {
      // Step 1: Create an order on your server
      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
      });

      const order = await response.json();
      console.log('Order created:', order);

      // Step 2: Initiate Razorpay payment
      const options = {
        key: "", // Add your Razorpay key here
        amount,
        currency,
        name: "Siddharth",
        description: "Test Transaction",
        image: "https://i.ibb.co/5Y3m33n/test.png",
        order_id: order.id,
        handler: async function(response) {
          const body = { ...response };

          // Step 3: Validate payment on your server
          const validateResponse = await fetch('http://localhost:5000/validate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });

          const jsonResponse = await validateResponse.json();
          console.log('Validation response:', jsonResponse);

          // Handle successful payment
          if (jsonResponse.success) {
            alert('Payment successful!');
          } else {
            alert('Payment validation failed. Please try again.');
          }
        },
        prefill: {
          name: "siddharth soni",
          email: "siddharth070@.com",
          contact: "9000000000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function(response) {
        alert(`Payment failed: ${response.error.description}`);
      });

      rzp1.open();
    } catch (error) {
      console.error('Error during payment processing:', error);
      alert('An error occurred while processing your payment. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left side: Image and bird details */}
        <div className="border rounded-lg shadow-lg p-4">
          <img
            className="w-full h-80 object-cover rounded-md mb-4"
            src={bird.img}
            alt={bird.name}
          />
          <h2 className="text-2xl font-bold mb-4">{bird.name}</h2>
          <p className="text-lg text-gray-700 mb-2"><strong>Price:</strong> {bird.price}</p>
          <p className="text-lg text-gray-700 mb-2">Exotic and beautiful bird. A perfect choice for bird lovers.</p>
        </div>

        {/* Right side: Purchase and Payment section */}
        <div className="border rounded-lg shadow-lg p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Purchase Details</h2>
          <p className="text-lg text-gray-700 mb-4">Price: {bird.price}</p>
          <button 
            type='button'
            onClick={paymentHandler}
            className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 mb-4"
          >
            Buy Now
          </button>

          {/* Payment options and QR Code */}
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Left: Payment Options */}
            <div className="flex-1 mb-4 lg:mr-4">
              <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
              <div className="flex flex-col space-y-4">
                {/* UPI Payment */}
                <div className="flex items-center space-x-4">
                  <img src={upiIcon} alt="UPI" className="w-10 h-10 object-contain" />
                  <span className="text-lg font-medium">UPI ID: <strong>8878721435@ybl</strong></span>
                </div>

                {/* PhonePe */}
                <div className="flex items-center space-x-4">
                  <img src={phonePeIcon} alt="PhonePe" className="w-10 h-10 object-contain" />
                  <span className="text-lg font-medium">PhonePe: <strong>Pay with PhonePe</strong></span>
                </div>

                {/* Google Pay */}
                <div className="flex items-center space-x-4">
                  <img src={googlePayIcon} alt="Google Pay" className="w-10 h-10 object-contain" />
                  <span className="text-lg font-medium">Google Pay: <strong>Pay with Google Pay</strong></span>
                </div>

                {/* Razorpay */}
                <div className="flex items-center space-x-4">
                  <img src={razorpayIcon} alt="Razorpay" className="w-10 h-10 object-contain" />
                  <span className="text-lg font-medium">Razorpay: <strong>Pay with Razorpay</strong></span>
                </div>
              </div>
            </div>

            {/* Right: QR Code */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-red-500 ">Scan to Pay</h3>
              <img src={qr} alt="QR Code" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyDetail;
