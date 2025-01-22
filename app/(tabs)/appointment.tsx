import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const Calendar = () => {
  const [dates, setDates] = useState<any[]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  useEffect(() => {
    generateCalendar();

    // Set up a timer to check for date changes at midnight
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        generateCalendar(); // Regenerate the calendar when the day changes
      }
    }, 60000); // Check every minute

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, []);

  const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-indexed (0 = January, 1 = February, etc.)
    const dayOfMonth = today.getDate(); // Current day of the month

    // Set current month and year
    setCurrentMonth(today.toLocaleString("default", { month: "long" }));
    setCurrentYear(year);

    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Generate an array of dates for the current month starting from today
    const currentMonthDates = Array.from(
      { length: daysInMonth - dayOfMonth + 1 },
      (_, index) => {
        const date = dayOfMonth + index; // Start from today
        const weekday = new Date(year, month, date).toLocaleString("default", {
          weekday: "short",
        });

        return {
          day: date,
          weekday: weekday,
          month: month, // Current month
          isNextMonth: false, // Indicates it's in the current month
        };
      }
    );

    // Generate an array of dates for the next month
    const nextMonth = (month + 1) % 12; // Handle December -> January transition
    const nextMonthYear = month === 11 ? year + 1 : year; // Increment year if next month is January
    const daysInNextMonth = new Date(nextMonthYear, nextMonth + 1, 0).getDate();

    const nextMonthDates = Array.from({ length: 7 }, (_, index) => {
      const date = index + 1; // Start from the 1st of the next month
      const weekday = new Date(nextMonthYear, nextMonth, date).toLocaleString(
        "default",
        {
          weekday: "short",
        }
      );

      return {
        day: date,
        weekday: weekday,
        month: nextMonth, // Next month
        isNextMonth: true, // Indicates it's in the next month
      };
    });

    // Combine current month and next month dates
    const allDates = [...currentMonthDates, ...nextMonthDates];
    setDates(allDates);

    // Set the current day as selected
    setSelectedDate(dayOfMonth);
  };

  const handleDatePress = (day: number, isNextMonth: boolean) => {
    setSelectedDate(day); // Update the selected date
    if (isNextMonth) {
      // Update the current month and year if the user selects a date from the next month
      const nextMonth = (new Date().getMonth() + 1) % 12;
      const nextYear = new Date(currentYear, new Date().getMonth() + 1).getMonth() === 0 ? currentYear + 1 : currentYear;
      setCurrentMonth(
        new Date(currentYear, nextMonth).toLocaleString("default", {
          month: "long",
        })
      );
      setCurrentYear(nextYear);
    }
  };

  const renderDateItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      onPress={() => handleDatePress(item.day, item.isNextMonth)}
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        width: 64,
        height: 80,
        backgroundColor:
          item.day === selectedDate && !item.isNextMonth ? "#2E004F" : "#E2E8F0",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: item.isNextMonth
            ? "#A0AEC0" // Greyed out for next month's dates
            : item.day === selectedDate
            ? "#FFFFFF"
            : "#4A5568",
        }}
      >
        {item.day}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: item.isNextMonth
            ? "#A0AEC0" // Greyed out for next month's dates
            : item.day === selectedDate
            ? "#FFFFFF"
            : "#A0AEC0",
        }}
      >
        {item.weekday}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4A5568", marginBottom: 16 }}>
        {currentMonth} {currentYear}
      </Text>

      <FlatList
        data={dates}
        horizontal
        keyExtractor={(item, index) => `${item.day}-${index}`}
        renderItem={renderDateItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      />
    </View>
  );
};

export default Calendar;
