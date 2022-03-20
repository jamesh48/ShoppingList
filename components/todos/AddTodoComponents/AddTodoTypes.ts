import { FormikProps } from 'formik';

export interface AddTodoProps {
  addNewTodoCallback: ({
    newTodoVal,
    categoryVal,
    costVal,
    vendorVal,
    linkVal,
    noteVal,
  }: {
    newTodoVal: string;
    categoryVal: string;
    costVal: string;
    vendorVal: string;
    linkVal: string;
    noteVal: string;
  }) => void;
  currCategory: string;
  categories: string[];
  vendors: string[];
}

export interface CostInputProps {
  costVal: string;
  handleCostChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VendorInputProps {
  vendorSuggestions: string[];
  formik: FormikProps<{
    category: string;
    vendor: string;
    todo: string;
    note: string;
    cost: string;
    link: string;
  }>;
}

export interface LinkInputProps {
  formik: FormikProps<{
    category: string;
    vendor: string;
    todo: string;
    note: string;
    cost: string;
    link: string;
  }>;
}

export interface CategoryInputProps {
  categorySuggestions: string[];
  formik: FormikProps<{
    category: string;
    vendor: string;
    todo: string;
    note: string;
    cost: string;
    link: string;
  }>;
}
