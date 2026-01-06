const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Details</h2>
    <form className="mt-4 space-y-4">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block">First Name</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label className="block">Last Name</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block">Email</label>
          <input type="email" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label className="block">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-2">
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-1 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-2">
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-1 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
