function createNewUser() {
  let name = prompt("Напишіть будь ласка своє їм'я");
  while (!(name && /^[a-zA-Z]+$/.test(name))) {
    name = prompt("Напишіть будь ласка своє їм'я ще раз ");
  }

  let surname = prompt("Напишіть будь ласка своє прізвище");
  while (!(surname && /^[a-zA-Z]+$/.test(surname))) {
    surname = prompt("Напишіть будь ласка своє прізвище ще раз ");
  }

  function getBithday() {
    do {
      userBirthday = prompt(
        "Напишіть будь ласка свою дату народження (текст у форматі dd.mm.yyyy):"
      );
    } while (!/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/.test(userBirthday));
    return userBirthday;
  }
  let birthFn = getBithday();

  newUser = {
    firstName: name,
    lastName: surname,
    inputDate: +birthFn.substring(0, 2),
    inputMonth: +birthFn.substring(3, 5),
    inputYear: +birthFn.substring(6, 10),
    getLogin: function () {
      return (
        newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase()
      );
    },
    getAge() {
      let now = new Date();
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let birthday = new Date(
        newUser.inputYear,
        newUser.inputMonth,
        newUser.inputDate
      );
      let age = today.getFullYear() - birthday.getFullYear();
      let month = today.getMonth() + 1 - birthday.getMonth();
      let day = today.getDay() - birthday.getDay();
      if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }
      return age;
    },
    getPassword() {
      return (
        newUser.firstName[0].toUpperCase() +
        newUser.lastName.toLowerCase() +
        newUser.inputYear
      );
    },
  };
  Object.defineProperty(newUser, "firstName", {
    value: name,
    writable: false,
  });
  Object.defineProperty(newUser, "lastName", {
    value: surname,
    writable: false,
  });
  console.log(newUser.getLogin());
  console.log(newUser.getAge());
  console.log(newUser.getPassword());
}

createNewUser();

