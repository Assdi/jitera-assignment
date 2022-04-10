interface UserCompany {
  catchPhrase: string;
  bs: string;
  name: string;
}

interface UserAddress {
  city: string;
  street: string;
  zipcode: string;
  suite: string;
  geo: { lat: string; lng: string };
}

export interface User {
  email: string;
  id: string;
  name: string;
  phone: string;
  website: string;
  user: string;
  company: UserCompany;
  address: UserAddress;
}
