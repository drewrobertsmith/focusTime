import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'

export const FocusHistory = ({history}) => {

  if (!history || !history.length) return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello! What will you focus on today?</Text>
    </View>
    
    );

  const renderItem = ({item}) => <Text style={styles.item}> - {item}</Text>



  return (
   <View style={styles.container}>
    <Text style={styles.title}>Focus History:</Text>
    <FlatList 
      data={history}
      renderItem={renderItem}
    />
  </View>
 ) 
} 

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    paddingTop: spacing.sm,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  }
})