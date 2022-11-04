export class UserLocalProfile {

  uid!: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email?: string;
  photoURL?: string;
  phone: string;
  address: string;

  // constructor(userProfile: UserLocalProfile) {
  //     this.uid = userProfile.uid;
  //     this.email = userProfile.email;
  //     this.displayName = userProfile.displayName;
  //     this.photoURL = userProfile.photoURL;
  //     this.firstName = userProfile.firstName;
  //     this.lastName = userProfile.lastName;
  //     this.phone = userProfile.phone;
  //     this.address = userProfile.address;
  // }
  constructor(displayName: string, firstName: string, lastName: string, phone: string, address: string, photoURL?: string, email?: string,) {

    this.email = email;
    this.displayName = displayName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
    this.photoURL = photoURL;
  }

  get Uid() {
    return this.uid;
  }

}

export interface IUserLocalProfile {
  uid: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
}
