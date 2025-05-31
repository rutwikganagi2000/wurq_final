import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, FlatList } from "react-native"
import { userStore } from "../stores/UserStore"
import { UserData } from "../types/User"

const getCardColor = (age: number) => {
  if (age < 30) return "#ccc"
  if (age <= 50) return "#f00"
  return "#00f"
}

export const UserListScreen = observer(() => {
  useEffect(() => {
    userStore.fetchUsers()
  }, [])

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
        Total Fees: {userStore.totalFees}
      </Text>
      <FlatList<UserData>
        data={userStore.users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: getCardColor(item.user.age),
              marginVertical: 8,
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Text>{item.user.name} {item.user.lastname}</Text>
            <Text>Age: {item.user.age}</Text>
            <Text>Fee: {item.user.fee}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  )
})
