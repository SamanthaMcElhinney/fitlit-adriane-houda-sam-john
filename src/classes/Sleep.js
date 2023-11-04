const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore"); // Import the plugin

dayjs.extend(customParseFormat);
dayjs.extend(isSameOrBefore);

class Sleep {
  constructor(sleepData) {
    this.data = sleepData;
  }

  calculateAverageSleepHours(userID) {
    let userSleepData = this.data.filter((user) => user.userID === userID);
    let totalSleepHours = userSleepData.reduce(
      (acc, user) => acc + user.hoursSlept,
      0
    );
    return Number((totalSleepHours / userSleepData.length).toFixed(2));
  }

  calculateAverageSleepQuality(userID) {
    let userSleepData = this.data.filter((user) => user.userID === userID);
    let totalSleepQuality = userSleepData.reduce(
      (acc, user) => acc + user.sleepQuality,
      0
    );
    return Number((totalSleepQuality / userSleepData.length).toFixed(2));
  }

  findSleepHoursOnDate(userID, date) {
    let userSleepData = this.data.filter((user) => user.userID === userID);
    console.log(`Looking for hours slept for user ${userID} on date ${date}`); // Debug line
    let sleepHours = userSleepData.find((user) =>
      dayjs(user.date, "YYYY/MM/DD").isSame(dayjs(date, "YYYY/MM/DD"))
    );
    console.log(`Found entry:`, sleepHours); // Debug line
    return sleepHours ? sleepHours.hoursSlept : null;
  }

  findSleepQualityOnDate(userID, date) {
    let filteredSleepData = this.data.filter((user) => user.userID === userID);
    console.log(`Looking for sleep quality for user ${userID} on date ${date}`); // Debug line
    let sleepQualityEntry = filteredSleepData.find((user) =>
      dayjs(user.date, "YYYY/MM/DD").isSame(dayjs(date, "YYYY/MM/DD"))
    );
    console.log(`Found entry:`, sleepQualityEntry); // Debug line
    return sleepQualityEntry ? sleepQualityEntry.sleepQuality : null;
  }

  calculateWeeklyHoursSlept(userID, date) {
    const endDate = dayjs(date);
    const startDate = endDate.subtract(6, "day");
    const filteredSleepData = this.data.filter(
      (user) => user.userID === userID
    );

    const sleepData = filteredSleepData.filter((entry) => {
      let entryDate = dayjs(entry.date, "YYYY/MM/DD");
      return entryDate.isAfter(startDate) && entryDate.isSameOrBefore(endDate);
    });

    return sleepData.map((element) => ({
      date: element.date,
      hoursSlept: element.hoursSlept,
    }));
  }

  calculateWeeklySleepQuality(userID, date) {
    const endDate = dayjs(date);
    const startDate = endDate.subtract(6, "day");
    const filteredSleepData = this.data.filter(
      (user) => user.userID === userID
    );

    const sleepData = filteredSleepData.filter((entry) => {
      let entryDate = dayjs(entry.date, "YYYY/MM/DD");
      return entryDate.isAfter(startDate) && entryDate.isSameOrBefore(endDate);
    });

    return sleepData.map((element) => ({
      date: element.date,
      sleepQuality: element.sleepQuality,
    }));
  }
}

module.exports = Sleep;
