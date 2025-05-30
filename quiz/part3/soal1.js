function changeMe(arr) {
    // you can only write your code here!
    let newProfile = [];
    for(let i = 0; i < arr.length; i++) {
        let data = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: arr[i][3] ? 2023 - arr[i][3] : 'Invalid Birth Year',
        }

        console.log(`${i+1}. ${data.firstName} ${data.lastName}: `);
        console.log(data);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  //intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.
  
  changeMe([]); // ""