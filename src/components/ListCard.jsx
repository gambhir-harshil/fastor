import { Star } from "lucide-react";
import { Link } from "react-router-dom";
const ListCard = ({ restaurant }) => {
  return (
    <div className="flex items-center gap-8">
      <Link
        to={`/${restaurant.restaurant_id}`}
        state={restaurant}
        className="h-[130px] w-[130px]"
      >
        <img
          src={restaurant.images[0].url}
          alt={restaurant.restaurant_name}
          className="object-cover w-full h-full rounded-md"
        />
      </Link>
      <div className="flex flex-col">
        <h4 className="text-lg font-bold">{restaurant.restaurant_name}</h4>
        <h3 className="text-sm font-semibold text-gray-400">
          Cakes, Pastry, Pastas
        </h3>
        <h3 className="text-sm font-semibold text-gray-400">
          {restaurant.location?.location_address_2}
        </h3>
        <span className="mt-1 text-sm font-bold text-orange-400">
          4 Offers trending
        </span>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col">
            <span className="flex items-center text-sm font-bold">
              <Star size={12} strokeWidth={3} />{" "}
              {restaurant.rating?.restaurant_avg_rating}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              Popularity
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center text-sm font-bold">
              {restaurant.currency.symbol} {restaurant.avg_cost_for_two}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              Cost for two
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;

/* {
    restaurant_id: '16569',
    lead_id: '16157',
    restaurant_name: 'Rahul Store',
    avg_cost_for_two: 250,
    avg_order_cost: null,
    avg_daily_order_count: null,
    rating: {
      restaurant_avg_rating: 4,
      count: 1,
      all: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 }
    },
    currency: { symbol: '₹' },
    table_count: 0,
    does_bookings: false,
    location_id: '1',
    e_type_id: '16',
    restaurant_uuid: 'f1d9c292-5b8b-4ba4-97c7-5f57599ec9a2',
    image: null,
    is_tnc_agree: null,
    restaurant_mode: 'NON_DINE_IN',
    opens_at: '09:30:00',
    closes_at: '21:30:00',
    qr_active: false,
    address_complete: 'null',
    is_close: false,
    is_close_cafeteria: false,
    status: 'OPEN',
    merchant_payment_methods: [ 'cash' ],
    social_profiles: null,
    logo: null,
    next_closes_at: null,
    next_opens_at: null,
    free_trial_eligiblity: true,
    points: '70000',
    active: true,
    free_tier_expire_at: null,
    refer_responded: true,
    active_plan: 'FREE',
    free_trial_expired: false,
    created_at: '1618657503',
    restaurant_code: 'rahul-store-3',
    noti_set: 'B',
    activated_at: null,
    active_plan_id: '1',
    available_credits: null,
    type_id: null,
    m_id: 16403,
    store_id: null,
    location: {
      location_id: 1,
      location_address: 
        'B-6/2, Model Town 1, Model Town Phase I, Mukherjee Nagar, New Delhi, Delhi 110009',
      location_address_2: 'Model Town',
      location_zip_code: 110009,
      location_lat: 28.703186,
      location_long: 77.19393,
      location_locality: 'Model Town',
      city_name: 'Delhi',
      state_name: 'Delhi',
      city_id: null,
      country_id: '103',
      state_id: '35',
      update_count: '0'
    },
    restaurant_type: null,
    cuisines: [
      {
        cuisine_id: 15628,
        cuisine_name: 'Phone',
        restaurant_id: '16569',
        added_at: '2021-04-17T16:36:12.000Z',
        is_visible: true,
        is_deleted: false,
        color: '#eee',
        text_color: '#f09819',
        image: null,
        counter_id: null
      }
    ],
    images: [
      {
        url: 
          'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
      }
    ],
    thumbnail_image: null,
    cover_image: null,
    small_image: null,
    large_image: null
  }, */
