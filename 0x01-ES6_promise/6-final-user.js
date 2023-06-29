import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
        let array = []
        for (let i = 0; i < results.length; i++) {
            const values = {
                status: results[i].status,
                value:
                    results[i].status === 'fulfilled' ? results[i].value : String(results[i].reason),
            }
            array.push(values);
        }
        return array;
    });
}
