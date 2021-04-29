const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

function getInitialsFromFullName(fullName) {
  const partsOfNameArray = fullName.split(" ");
  let initials = "";

  for (let i = 0; i < partsOfNameArray.length; i++) {
    const partOfName = partsOfNameArray[i];
    initials = initials + partOfName[0];
  }

  return initials;
}

function getDepartmentsFromData(departmentsString) {
  return departmentsString.split("|");
}

function convertUserCSVsToObjectsArray(data) {
  const arrayOfUsers = [];

  for (let i = 0; i < data.length; i++) {
    // "i" is the index number ot the data
    const userDataString = data[i]; // B,Robert Smith,,Users|Admin|Sudo
    const userDataArray = userDataString.split(","); // for example [ 'D', 'Cheesedude51', '1951', 'Users' ]

    const id = userDataArray[0];
    const fullName = userDataArray[1];
    const initials = getInitialsFromFullName(fullName);
    const birthYear = userDataArray[2] ? userDataArray[2] : "Unknown";
    const departments = getDepartmentsFromData(userDataArray[3]);

    const userObject = { id, fullName, initials, birthYear, departments };
    arrayOfUsers.push(userObject);
  }

  return arrayOfUsers;
}

const result = convertUserCSVsToObjectsArray(userDataDump);
console.log(result);