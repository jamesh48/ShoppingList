export interface AddTodoProps {
  addNewTodoCallback: (
    newTitle: string,
    categoryVal: string,
    cost: string,
    vendorVal: string,
    linkVal: string,
    noteVal: string
  ) => Promise<void>;
  currCategory: string;
  categories: string[];
  vendors: string[];
}

export interface CostInputProps {
  costVal: string;
  handleCostChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VendorInputProps {
  handleVendorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetSuggestions: (indicator: boolean) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  noSuggestionsAvailable: { current: any };
  vendorVal: string;
}

export interface LinkInputProps {
  linkVal: string;
  handleLinkChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CategoryInputProps {
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetSuggestions: (indicator: boolean) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  noSuggestionsAvailable: { current: any };
  categoryVal: string;
}

export interface SuggestionsListProps {
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  showSuggestions: boolean;
  itemValue: string;
  filteredSuggestions: string[];
  activeSuggestion: number;
  noSuggestionsAvailable: { current: any };
}
