import { MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";
import DoctorCard from "@/components/DoctorCard";
import HealthArticle from "@/components/HealthArticle";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const handleBookAppointment = () => {
  alert("Book Appointment");
};

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.sView}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* User Greeting */}
          <View style={styles.userGreeting}>
            <Image
              source={require("@/assets/images/doc.png")}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.greetingText}>Hi, Welcome Back,</Text>
              <Text style={styles.userName}>John Doe William</Text>
            </View>
          </View>
          <View style={styles.containerDes}>
            {/* Text Section */}
            <View style={styles.textContainerDes}>
              <Text style={styles.titleDes}>Medical Center</Text>
              <Text style={styles.descriptionDes}>
                Eyes are essential to how we experience the world. Proper eye
                care is the foundation for preserving sight and ensuring a
                lifetime of clarity and vision.
              </Text>
            </View>

            <View>
              <Image
                source={require("@/assets/images/doc-f.png")}
                style={styles.imageDes}
              />
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Top Doctors Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Doctors</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <DoctorCard
              name="Dr. John Tauhid"
              specialty="Cardiologist"
              rating={4.8}
              date="16th Jan 2025"
              time="10:30 AM"
              onPress={handleBookAppointment}
            />

            <DoctorCard
              name="Dr. John Doe"
              specialty="Cardiologist"
              rating={4.8}
              date="16th Jan 2025"
              time="10:30 AM"
              onPress={handleBookAppointment}
            />
          </ScrollView>

          <HealthArticle />

          <View style={styles.appContainer}>
            <Text style={styles.title}>
              Book Appointments in <Text style={styles.bold}>3 easy steps</Text>
            </Text>

            <View style={styles.step}>
              <View style={styles.iconContainer}>
                <Feather name="search" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.stepText}>
                Search for doctors by{" "}
                <Text style={styles.bold}>speciality</Text>,{" "}
                <Text style={styles.bold}>service</Text> or{" "}
                <Text style={styles.bold}>disease</Text>
              </Text>
            </View>

            {/* Step 2 */}
            <View style={styles.step}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="bookmark-border"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
              <Text style={styles.stepText}>
                Book and <Text style={styles.bold}>confirmed appointment</Text>{" "}
                within seconds
              </Text>
            </View>

            {/* Step 3 */}
            <View style={styles.step}>
              <View style={styles.iconContainer}>
                <View style={styles.roundBorder}>
                  <Feather name="check" size={15} color="#FFFFFF" />
                </View>
              </View>
              <Text style={styles.stepText}>
                Select based on <Text style={styles.bold}>experience</Text>,{" "}
                <Text style={styles.bold}>fee</Text> or{" "}
                <Text style={styles.bold}>rating</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E004F",
  },
  sView: {
    marginBottom: 40,
    marginTop: 14,
  },
  header: {
    padding: 16,
  },
  userGreeting: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 24,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  greetingText: {
    color: "#B1A5A5",
    fontSize: 16,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  //Description
  containerDes: {
    flexDirection: "row",
    backgroundColor: "#C4521A",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  textContainerDes: {
    flex: 1,
    marginRight: 28,
  },
  titleDes: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  descriptionDes: {
    fontSize: 11,
    color: "#FFFFFF",
    lineHeight: 20,
  },
  imageDes: {
    width: 160,
    height: 160,
    borderRadius: 8,
    marginLeft: -40,
    marginBottom: -20,
  },
  mainContent: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  seeAll: {
    color: "#6200EE",
    fontSize: 14,
    paddingRight: 8,
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  //Appointment
  appContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    color: "#333333",
    marginBottom: 20,
    marginTop: 16,
    marginLeft: -16,
  },
  bold: {
    fontWeight: "700",
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#FF6A00",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  appIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
  },
  stepText: {
    fontSize: 14,
    color: "#333333",
    flex: 1,
  },
  roundBorder: {
    width: 22,
    height: 22,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#2E004F",
  },
});
