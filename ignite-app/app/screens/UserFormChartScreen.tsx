import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from "react-native"
import { LineChart } from "react-native-chart-kit"
import Icon from "react-native-vector-icons/FontAwesome"

const wurqLogo = require("../../assets/images/wurq-logo.png")

const initialForm = {
  points: "189",
  name: "WOD Newton",
}

const chartPoints = [15, -5, -8, 9, 10, 5, -3, 11]
const chartMin = -20
const chartMax = 20

export default function UserFormChartScreen() {
  const [form, setForm] = useState(initialForm)
  const [cardData, setCardData] = useState(initialForm)

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = () => {
    setCardData({ ...form }) 
  }

  const chartWidth = Dimensions.get("window").width - 32
  const chartHeight = 180
  const paddingHorizontal = 40
  const paddingVertical = 20

  const getY = (value: number) => {
    return (
      ((chartMax - value) / (chartMax - chartMin)) * (chartHeight - 2 * paddingVertical) +
      paddingVertical
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Image source={wurqLogo} style={styles.logoImage} resizeMode="contain" />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Points per WOD</Text>
        <LineChart
          data={{
            labels: ["", "", "", "", "", "", "", ""],
            datasets: [
              {
                data: chartPoints,
                color: () => "#00ff80",
                strokeWidth: 2,
              },
              {
                data: [chartMin, chartMax],
                color: () => "transparent",
                withDots: false,
                strokeWidth: 0,
              },
            ],
          }}
          width={chartWidth}
          height={chartHeight}
          withDots={false}
          withShadow={false}
          withInnerLines
          withOuterLines={false}
          yAxisInterval={1}
          fromZero={false}
          segments={4}
          chartConfig={{
            backgroundColor: "#2c3942",
            backgroundGradientFrom: "#2c3942",
            backgroundGradientTo: "#2c3942",
            decimalPlaces: 0,
            color: () => "#fff",
            labelColor: () => "#fff",
            propsForBackgroundLines: {
              stroke: "#444",
              strokeDasharray: "4,4",
            },
          }}
          bezier={false}
          style={styles.chart}
          decorator={() => (
            <>
              {chartPoints.map((value, index) => {
                const x =
                  paddingHorizontal +
                  (index * (chartWidth - 2 * paddingHorizontal)) / (chartPoints.length - 1)
                const y = getY(value)
                return (
                  <View
                    key={index}
                    style={{
                      position: "absolute",
                      left: x - 7,
                      top: y - 7,
                      width: 14,
                      height: 14,
                      borderRadius: 7,
                      backgroundColor: value >= 0 ? "#00ff80" : "#fff",
                      borderWidth: 2,
                      borderColor: "#fff",
                      zIndex: 10,
                    }}
                  />
                )
              })}
              <View
                style={{
                  position: "absolute",
                  left: paddingHorizontal,
                  width: chartWidth - 2 * paddingHorizontal,
                  top: getY(0) - 1,
                  borderTopWidth: 2,
                  borderStyle: "dotted",
                  borderColor: "#fff",
                  zIndex: 1,
                }}
              />
            </>
          )}
        />
      </View>

      <Text style={styles.sectionTitleLeft}>History:</Text>
      <View style={styles.historyCard}>
        <View style={styles.historyLeft}>
          <View style={styles.historyTopRow}>
            <Text style={styles.historyDate}>7/30/2022</Text>
            <Icon name="heart" size={20} color="#ff2d55" style={styles.heartIcon} />
          </View>
          <View style={styles.centeredCardContent}>
            <Text style={styles.historyWod}>{cardData.name}</Text>
            <View style={styles.historyRow}>
              <Text style={styles.historyLabel}>Time:</Text>
              <Text style={styles.historyValue}>12:53</Text>
              <Text style={styles.historyLabel}>Rest:</Text>
              <Text style={styles.historyValue}>0:37</Text>
              <Text style={styles.historyLabel}>| 5%</Text>
              <Text style={styles.historyValue}>167</Text>
            </View>
          </View>
        </View>
        <View style={styles.historyRight}>
          <View style={styles.centeredCardContent}>
            <Text style={styles.historyPoints}>+{cardData.points}</Text>
            <Text style={styles.historyPointsLabel}>Total Points</Text>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Points</Text>
        <TextInput
          style={styles.input}
          value={form.points}
          onChangeText={v => handleChange("points", v.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
        />
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          value={form.name}
          onChangeText={v => handleChange("name", v)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#2c3942",
    minHeight: "100%",
    alignItems: "center",
    paddingBottom: 32,
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 16,
  },
  logoImage: {
    width: 120,
    height: 40,
    marginBottom: 4,
  },
  chartContainer: {
    backgroundColor: "#22313a",
    borderRadius: 24,
    padding: 12,
    marginVertical: 8,
    width: Dimensions.get("window").width - 32,
  },
  chart: {
    borderRadius: 16,
    backgroundColor: "#22313a",
  },
  sectionTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 8,
    alignSelf: "center",
  },
  sectionTitleLeft: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 24,
    alignSelf: "flex-start",
  },
  historyCard: {
    flexDirection: "row",
    backgroundColor: "#22313a",
    borderRadius: 24,
    marginVertical: 8,
    width: Dimensions.get("window").width - 32,
    overflow: "hidden",
  },
  historyLeft: {
    flex: 3,
    padding: 16,
    justifyContent: "center",
  },
  historyTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  heartIcon: {
    marginLeft: 8,
  },
  centeredCardContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  historyDate: {
    color: "#fff",
    fontSize: 14,
  },
  historyWod: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
    width: "100%",
  },
  historyRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  historyLabel: {
    color: "#bbb",
    fontSize: 14,
    marginRight: 4,
  },
  historyValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  historyRight: {
    flex: 1,
    backgroundColor: "#181f24",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  historyPoints: {
    color: "#00ff80",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  historyPointsLabel: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
    width: "100%",
  },
  formContainer: {
    width: Dimensions.get("window").width - 32,
    marginTop: 24,
    backgroundColor: "#22313a",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  inputLabel: {
    color: "#fff",
    marginBottom: 4,
    marginTop: 8,
    fontSize: 16,
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#181f24",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 8,
    width: "100%",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
    width: "100%",
  },
  submitButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 18,
  },
})
