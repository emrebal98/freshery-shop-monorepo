import { IcActionsStar } from 'icons';
import Button from './Button';
import Tag from './Tag';

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
                  <IcActionsStar
                    className="ui-h-4 ui-w-4 ui-fill-gray-900"
                    key={i}
                  />
                );
              }
              return (
                <IcActionsStar
                  className="ui-h-4 ui-w-4 ui-text-gray-500"
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
