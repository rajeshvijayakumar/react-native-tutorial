/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import { ScrollView, View, Text, StyleSheet, RefreshControl } from 'react-native';


const App = () => {
  const [Items, setItems] = useState([
    { key: 1, item: "Item 1" },
    { key: 2, item: "Item 2" },
    { key: 3, item: "Item 3" },
    { key: 4, item: "Item 4" },
    { key: 5, item: "Item 5" },
    { key: 6, item: "Item 6" },
    { key: 7, item: "Item 7" },
    { key: 8, item: "Item 8" },
    { key: 9, item: "Item 9" },
    { key: 10, item: "Item 10" },
    { key: 11, item: "Item 11" },
    { key: 12, item: "Item 12" },
  ])

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 13, item: "Item 13" }]);
    setRefreshing(false);
  }
  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={Refreshing}
        onRefresh={onRefresh} />
    } style={styles.body}>
      {
        Items.map((itemObj) => {
          return (
            <View style={styles.item} key={itemObj.key}>
              <Text style={styles.text}>{itemObj.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
