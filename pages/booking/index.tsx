import { useState } from "react";
import BookingFormComponent from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import axios from "axios";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingForm bookingDetails={bookingDetails} />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
      <CancellationPolicy />
    </div>
  );
}

// BookingForm Component with API Integration
const BookingForm = ({ bookingDetails }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Add bookingDetails to submission
    const payload = { ...formData, bookingDetails };

    try {
      await axios.post("http://localhost:3001/bookings", payload);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        streetAddress: "",
        aptSuite: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact & Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        {/* Payment */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
          />
        </div>
        <div className="mt-4">
          <label>Apt/Suite</label>
          <input
            name="aptSuite"
            value={formData.aptSuite}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label>State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label>Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};
