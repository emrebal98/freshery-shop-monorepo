import Button from './Button';
import Tag from './Tag';

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={className ?? 'ui-h-6 ui-w-6'}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.3334 5.31676C18.4485 4.95169 18.677 4.63282 18.9857 4.40648C19.2945 4.18014 19.6673 4.05811 20.0501 4.05811C20.4329 4.05811 20.8057 4.18014 21.1144 4.40648C21.4231 4.63282 21.6516 4.95169 21.7667 5.31676L24.8667 14.8501H34.8667C35.2632 14.8351 35.6537 14.9503 35.9785 15.1782C36.3034 15.406 36.5447 15.7339 36.6656 16.1118C36.7865 16.4897 36.7804 16.8968 36.6482 17.2708C36.516 17.6449 36.2649 17.9655 35.9334 18.1834L27.8167 24.0668L30.9167 33.6168C31.0393 33.9805 31.0424 34.374 30.9256 34.7396C30.8087 35.1053 30.578 35.424 30.2671 35.6492C29.9563 35.8745 29.5815 35.9944 29.1977 35.9916C28.8138 35.9887 28.4409 35.8632 28.1334 35.6334L20.0001 29.6834L11.8834 35.5834C11.5759 35.8132 11.203 35.9387 10.8191 35.9416C10.4353 35.9444 10.0606 35.8245 9.74969 35.5992C9.43883 35.374 9.20812 35.0553 9.09125 34.6896C8.97438 34.324 8.97747 33.9305 9.10007 33.5668L12.2001 24.0168L4.08341 18.1334C3.75188 17.9155 3.50083 17.5949 3.36861 17.2208C3.23639 16.8468 3.23028 16.4397 3.3512 16.0618C3.47212 15.6839 3.71344 15.356 4.03827 15.1282C4.3631 14.9003 4.75359 14.7851 5.15007 14.8001H15.1501L18.3334 5.31676Z"
      stroke="inherit"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  currency: string;
  rating: 1 | 2 | 3 | 4 | 5;
  oldPrice?: number;
  // TODO: get image as element or string - <img> <Image> or url
  // image: string;
}

export default function ProductCard({
  title,
  description,
  price,
  currency,
  rating,
  oldPrice,
}: ProductCardProps) {
  // Calculate discount percentage
  const discount = oldPrice ? Math.round((1 - price / oldPrice) * 100) : null;
  return (
    <div className="ui-flex ui-w-[269px] ui-flex-col ui-gap-4 ui-rounded-xl ui-border ui-border-gray-600 ui-bg-white ui-p-4">
      <div
        className="ui-relative ui-h-[180px] ui-rounded-xl ui-bg-gray-300"
        data-temp={'Img'}
      >
        {discount && (
          <Tag
            className="ui-absolute ui-top-3 ui-left-3"
            text={`- ${discount} %`}
          />
        )}
      </div>
      <div className="ui-flex ui-flex-col ui-gap-4">
        <div className="ui-flex ui-flex-col ui-gap-3">
          {/* Title and Description */}
          <div className="ui-flex ui-flex-col ui-gap-1">
            <h3 className="ui-font-display ui-text-lg ui-font-medium ui-text-gray-900">
              {title ?? 'Product title'}
            </h3>
            <p className="ui-font-body ui-text-sm ui-font-normal ui-text-gray-800">
              {description ?? 'Space for a small product description'}
            </p>
          </div>
          {/* Ratings */}
          <div className="ui-flex ui-items-center ui-gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              if (i < rating) {
                return (
                  <StarIcon
                    className="ui-h-4 ui-w-4 ui-text-gray-900"
                    key={i}
                  />
                );
              }
              return (
                <StarIcon
                  className="ui-h-4 ui-w-4 ui-stroke-gray-500 ui-text-white"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        {/* Price and button */}
        <div className="ui-flex ui-items-center ui-justify-between">
          <div>
            <p className="ui-font-display ui-text-2xl ui-font-semibold ui-text-gray-900">
              {`${price ?? '36.99'} ${currency ?? 'USD'}`}
            </p>
            {/* Discount price */}
            {oldPrice && (
              <p className="ui-font-display ui-text-sm ui-font-semibold ui-text-gray-700 ui-line-through">
                {oldPrice}
              </p>
            )}
          </div>
          <Button size={'sm'}>Buy now</Button>
        </div>
      </div>
    </div>
  );
}
