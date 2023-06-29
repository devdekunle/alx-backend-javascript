export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      const userObject = {
        firstname: `${firstName}`,
        lastName: `${lastName}`,
      };
      resolve(userObject);
    } else {
      reject(new Error());
    }
  });
}
