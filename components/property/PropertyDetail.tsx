interface PropertyDetailProps {
  property: {
    id: number;
    name: string;
    price: number;
    image: string;
    location: string;
    rating: number;
    reviewsCount: number;
    description?: string; // optional
  };
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => (
  <div className="container mx-auto p-6">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-96 object-cover rounded-lg"
    />
    <div className="mt-4">
      <h1 className="text-3xl font-bold">{property.name}</h1>
      <p className="text-gray-500">{property.location}</p>
      <p className="mt-2 font-semibold">${property.price} / night</p>
      <p className="text-sm text-gray-600">
        {property.rating} ⭐ ({property.reviewsCount} reviews)
      </p>
      {property.description && (
        <p className="mt-4 text-gray-700">{property.description}</p>
      )}
    </div>
  </div>
);

export default PropertyDetail;
