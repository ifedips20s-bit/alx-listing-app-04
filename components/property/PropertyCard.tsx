interface PropertyCardProps {
  property: {
    id: number;
    name: string;
    price: number;
    image: string;
    location: string;
    rating: number;
    reviewsCount: number;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{property.name}</h3>
      <p className="text-gray-500">{property.location}</p>
      <p className="mt-2 font-semibold">${property.price} / night</p>
      <p className="text-sm text-gray-600">
        {property.rating} ⭐ ({property.reviewsCount} reviews)
      </p>
    </div>
  </div>
);

export default PropertyCard;
