  export interface Employee {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    jobTitle: string;
    startDate: string;
    employmentType: string;
    accountName: string;
    bankName: string;
    accountNumber: string;
    amount: string;
    picture: string;
  }

  export interface AddEmployeePopup {
    type: string
    isShown: boolean
    data: Employee | null
  }
