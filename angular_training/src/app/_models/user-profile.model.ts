export class UserLocalProfile {

  uid: string;
  email: string;
  displayName: string;
  photoURL:string;
  firstName: string;
  lastName: string;
  phone:string;
  address: string;

  constructor(userProfile: UserLocalProfile) {
      this.uid = userProfile.uid;
      this.email = userProfile.email;
      this.displayName = userProfile.displayName;
      this.photoURL = userProfile.photoURL;
      this.firstName = userProfile.firstName;
      this.lastName = userProfile.lastName;
      this.phone = userProfile.phone;
      this.address = userProfile.address;
  }

  get Uid () {
    return this.uid;
  }

}

export interface IUserLocalProfile  {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?:string;
  firstName?: string;
  lastName?: string;
  phone?:string;
  address?: string;
}
