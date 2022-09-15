/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import { ScrollView, View, Text, StyleSheet, RefreshControl, FlatList } from 'react-native';


const App = () => {
  const [Items, setItems] = useState([
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
    { name: "Item 9" },
    { name: "Item 10" },
    { name: "Item 11" },
    { name: "Item 12" },
  ])

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { name: "Item 13" }]);
    setRefreshing(false);
  }
  // horizontal={true}
  // inverted={true}
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )
      }
      refreshControl={
        <RefreshControl refreshing={Refreshing}
          onRefresh={onRefresh} />
      } />
    // <ScrollView refreshControl={
    //   <RefreshControl refreshing={Refreshing}
    //     onRefresh={onRefresh} />
    // } style={styles.body}>
    //   {
    //     Items.map((itemObj) => {
    //       return (
    //         <View style={styles.item} key={itemObj.key}>
    //           <Text style={styles.text}>{itemObj.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
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
