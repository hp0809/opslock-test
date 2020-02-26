/***Each users shift array is formatted like this:** `[{ start: "0000", end: "0600" }]`

*(each shift time is always a string with 4 characters)*

Users can define what shifts they are working on in their profile page but we don't want 
users choosing multiple shifts that interfere with each other. 

**For example:** If a user is assigned a shift of `0000` to `0600`. 
They can't choose a shift that starts at `0400` because that would 
interfere with one of their shifts.

**Note:** If a shift is from `0000` to `0600`, a user can also have 
a shift that starts at `0600`*/

interface IShift {
    start: string;
    end: string;
  }
  
  const usershifts = <IShift[]>[
      {
          start: '0600',
          end: '1000'
      },
      {
          start: '1600',
          end: '2000'
      }
  ];
  
  const globalShiftList = <IShift[]>[
      {
          start: '0000',
          end: '2359'
      },
      {
          start: '0600',
          end: '1800'
      },
      {
          start: '0000',
          end: '1200'
      },
      {
          start: '0600',
          end: '1200'
      },
      {
          start: '1800',
          end: '2359'
      },
      {
          start: '0000',
          end: '0600'
      },
      {
          start: '1200',
          end: '2359'
      },
      {
          start: '1200',
          end: '1800'
      }
  ];

  const chooseShift = function() {
      const shifts = []
      for(let i = 0; i < usershifts.length; i++) {
          for(let j = 0; j < globalShiftList.length; j++ ) {
              if(usershifts[i].start >= globalShiftList[j].start && usershifts[i].end <= globalShiftList[j].end){
                  shifts.push(globalShiftList[j]) 
              }
          }
      }
      return shifts
  }

  console.log(chooseShift())
