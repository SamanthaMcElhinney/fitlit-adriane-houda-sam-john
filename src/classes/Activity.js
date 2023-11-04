const dayjs = require("dayjs");

class Activity {
  constructor(activityData) {
    this.data = activityData;
  }

  calculateMilesWalked(date, user) {
    const dayActivities = this.data.find(
      (activity) => activity.date === date && activity.userID === user.id
    );
    if (!dayActivities) {
      return 0; // Or some default value
    }
    const steps = dayActivities.numSteps;
    const miles = (steps * user.strideLength) / 5280;
    return Number(miles.toFixed(2)); // Improved precision
  }

  dailyMinutesActive(userID, date) {
    const activeTime = this.data.find(
      (entry) => entry.userID === userID && entry.date === date
    );
    return activeTime ? activeTime.minutesActive : 0; // Or some default value
  }

  stepGoalMet(user, date) {
    const stepsToday = this.data.find(
      (entry) => entry.date === date && entry.userID === user.id
    );
    if (!stepsToday) {
      return "No activity data for today."; // Or some default message
    }
    return user.dailyStepGoal <= stepsToday.numSteps
      ? "Congratulations, you met your goal!"
      : `You can still meet your goal for today! Just ${
          user.dailyStepGoal - stepsToday.numSteps
        } steps left to go!`;
  }

  weeklyMinutes(userID, date) {
    const endDate = dayjs(date).endOf("day");
    const startDate = endDate.subtract(6, "day").startOf("day");
    const activitiesByWeek = this.data.filter(
      (entry) =>
        entry.userID === userID &&
        dayjs(entry.date).isAfter(startDate) &&
        dayjs(entry.date).isBefore(endDate)
    );
    // Assuming you want to sum minutes for the week:
    const totalMinutes = activitiesByWeek.reduce(
      (sum, entry) => sum + entry.minutesActive,
      0
    );
    return totalMinutes;
  }
};

export default Activity;