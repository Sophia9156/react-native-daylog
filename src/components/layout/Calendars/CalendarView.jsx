import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarView({
  markedDates,
  selectedDate,
  onSelectDate
}) {
  // 현재 연/월 사용하기
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    }
  }

  return (
  <Calendar 
    style={styles.calendar} 
    markedDates={markedSelectedDate}
    onDayPress={(day) => {
      onSelectDate(day.dateString)
    }}
    theme={{
      selectedDayBackgroundColor: '#4284b7',
      arrowColor: '#4284b7',
      dotColor: '#4284b7',
      todayTextColor: '#4284b7',
    }}
  />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  }
});