import Button from './Button';

// TODO: stars for ratings, tag for discount amd old price
export default function ProductCard() {
  return (
    <div className="ui-flex ui-w-[269px] ui-flex-col ui-gap-4 ui-rounded-xl ui-border ui-border-gray-600 ui-bg-white ui-p-4">
      <div
        className="ui-h-[180px] ui-rounded-xl ui-bg-gray-300"
        data-temp={'Img'}
      ></div>
      <div className="ui-flex ui-flex-col ui-gap-4">
        <div className="ui-flex ui-flex-col ui-gap-1">
          <h3 className="ui-font-display ui-text-lg ui-font-medium ui-text-gray-900">
            Product title
          </h3>
          <p className="ui-font-body ui-text-sm ui-font-normal ui-text-gray-800">
            Space for a small product description
          </p>
        </div>
        {/* Price and button */}
        <div className="ui-flex ui-items-center ui-justify-between">
          <p className="ui-font-display ui-text-2xl ui-font-semibold ui-text-gray-900">
            36.99 USD
          </p>
          <Button size={'sm'}>Buy now</Button>
        </div>
      </div>
    </div>
  );
}
