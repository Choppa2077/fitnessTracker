import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CreateWorkoutScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>CreateWorkoutScreen</Text>
    </View>
  )
}

export default CreateWorkoutScreen