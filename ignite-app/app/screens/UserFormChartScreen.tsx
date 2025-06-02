import React, { useRef, useState } from "react"
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, Keyboard } from "react-native"
import { LineChart } from "react-native-chart-kit"
import Icon from "react-native-vector-icons/FontAwesome"

const wurqLogo = require("../../assets/images/wurq-logo.png")

const initialForm = {
  points: "189",
  name: "WOD Newton",
}

const chartPoints = [15, -3, -6, 9, 10, 5, -2, 11]
const chartMin = -20
const chartMax = 20

export default function UserFormChartScreen() {
  const [form, setForm] = useState(initialForm)
  const [cardData, setCardData] = useState(initialForm)
  const nameInputRef = useRef<TextInput>(null)

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = () => {
    setCardData({ ...form })
    Keyboard.dismiss()
  }

  const chartWidth = Dimensions.get("window").width - 32
  const chartHeight = 200
  const paddingHorizontal = 40
  const paddingVertical = 20

  const getX = (index: number) => {
    return (
      paddingHorizontal +
      (index * (chartWidth - 2 * paddingHorizontal)) / (chartPoints.length - 1)
    )
  }
  const getY = (value: number) => {
    return (
      ((chartMax - value) / (chartMax - chartMin)) * (chartHeight - 2 * paddingVertical) +
      paddingVertical
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Image source={wurqLogo} style={styles.logoImage} resizeMode="contain" />
        <View style={styles.thickBlackLine} />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Points per WOD</Text>
        <LineChart
          data={{
            labels: ["", "", "", "", "", "", "", ""],
            datasets: [
              {
                data: chartPoints,
                color: () => "#fff",
                strokeWidth: 1,
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
              {chartPoints.map((value, index) => (
                <View
                  key={index}
                  style={{
                    position: "absolute",
                    left: getX(index) - 8,
                    top: getY(value) - 8,
                    width: 8,
                    height: 8,
                    borderRadius: 8,
                    borderWidth: 3,
                    backgroundColor: value >= 0 ? "#00ff80" : "#fff",
                    borderColor: value >= 0 ? "#00ff80" : "#fff",
                    zIndex: 10,
                  }}
                />
              ))}
              <View
                style={{
                  position: "absolute",
                  left: 65,
                  width: chartWidth - 2 * paddingHorizontal,
                  top: getY(0) - 10,
                  borderTopWidth: 3,
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
            <Icon
              name="heart-o"
              size={22}
              color="#ff2d55"
              style={styles.heartIcon}
            />
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
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => nameInputRef.current?.focus()}
        />
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          ref={nameInputRef}
          style={styles.input}
          value={form.name}
          onChangeText={v => handleChange("name", v)}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity style={styles.submitButton} onPressIn={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const FORM_WIDTH = 320

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
    marginBottom: 0,
  },
  logoImage: {
    width: 120,
    height: 40,
    marginBottom: 8,
  },
  thickBlackLine: {
    width: 420,
    height: 6,
    backgroundColor: "#111",
    borderRadius: 3,
    marginTop: 4,
    marginBottom: 8,
  },
  chartContainer: {
    backgroundColor: "#2c3942",
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
    marginLeft: 15,
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
    width: "100%",
  },
  historyRow: {
    flexDirection: "row",
    flexWrap: "wrap",
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
    width: FORM_WIDTH,
    maxWidth: "90%",
    marginTop: 24,
    backgroundColor: "#2c3942",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    alignSelf: "center",
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
