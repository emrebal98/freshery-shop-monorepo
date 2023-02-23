import { IcActionsSearch } from 'icons';

export default function InputSearch() {
  return (
    <div className="ui-flex ui-items-center ui-rounded-xl ui-border ui-border-gray-600 ui-bg-gray-200 ui-px-4 ui-py-3 ui-transition-colors focus-within:ui-border-gray-900">
      <input
        className="ui-flex-1 ui-bg-transparent ui-font-body ui-text-base ui-text-gray-900 placeholder:ui-text-gray-700 focus-visible:ui-outline-none"
        type="text"
        placeholder="Search Products, categories ..."
      />
      <IcActionsSearch className="ui-h-4 ui-w-4 ui-text-gray-900" />
    </div>
  );
}
