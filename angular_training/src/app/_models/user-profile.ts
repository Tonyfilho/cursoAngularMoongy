export class ProfileUser {

  uid: string;
  email: string;
  displayName: string;
  photoURL:string;
  firstName: string;
  lastName: string;
  phone:string;
  address: string;

  constructor(profileuser: ProfileUser) {
      this.uid = profileuser.uid;
      this.email = profileuser.email;
      this.displayName = profileuser.displayName;
      this.photoURL = profileuser.photoURL;
      this.firstName = profileuser.firstName;
      this.lastName = profileuser.lastName;
      this.phone = profileuser.phone;
      this.address = profileuser.address;
  }



}
