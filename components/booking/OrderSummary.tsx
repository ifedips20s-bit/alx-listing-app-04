import React from "react";

const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      <img
        src="https://example.com/property.jpg"
        alt="Property"
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6 space-y-2">
      <div className="flex justify-between">
        <span>Booking Fee</span>
        <span>${bookingDetails.bookingFee}</span>
      </div>
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${bookingDetails.price}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Grand Total</span>
        <span>${bookingDetails.bookingFee + bookingDetails.price}</span>
      </div>
    </div>
  </div>
);

export default OrderSummary;
