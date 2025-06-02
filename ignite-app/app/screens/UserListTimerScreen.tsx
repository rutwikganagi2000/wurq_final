import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { userStore } from "../stores/UserStore"
import { UserData } from "../types/User"

function formatUsers(users: UserData[]): string {
  return users
    .map(
      (item) =>
        `${item.user.name} ${item.user.lastname} | Age: ${item.user.age} | Fee: ${item.user.fee} | Location: ${item.location} | Date: ${item.date}`
    )
    .join("\n")
}

export const UserListTimerScreen = observer(() => {
  const [timer, setTimer] = useState(0)
  const [promiseResult, setPromiseResult] = useState("Waiting...")

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((t) => t + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (userStore.users.length === 0) {
      userStore.fetchUsers()
    }
  }, [])

  useEffect(() => {
    function intervalPromise(): Promise<string> {
      return new Promise((resolve) => {
        let count = 0
        const interval = setInterval(() => {
          count += 1
          if (count === 3) {
            clearInterval(interval)
            resolve("Promise resolved after 3 seconds!")
          }
        }, 1000)
      })
    }

    intervalPromise().then((msg) => setPromiseResult(msg))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Timer: {timer} seconds</Text>
      <Text style={styles.promise}>{promiseResult}</Text>
      <ScrollView style={styles.textBox}>
        <Text selectable style={styles.usersText}>
          {formatUsers(userStore.users)}
        </Text>
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },
  promise: {
    marginBottom: 12,
    color: "green",
    fontSize: 16,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#f9f9f9",
  },
  usersText: {
    fontSize: 14,
    color: "#222",
  },
})
