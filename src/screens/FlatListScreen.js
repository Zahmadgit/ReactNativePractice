

import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Button, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

const DATA =[]
for (let i = 1; i <= 1000; i++){
    DATA.push({
        id: `ID ${i}`,
        title: `Item Number ${i}`
    })
}

    

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



const FlatListScreen = props => {

const navigation = useNavigation()
return(    
  <SafeAreaProvider>
    
    <SafeAreaView style={styles.container}>
        
      <FlatList
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        initialNumToRender={1}
        updateCellsBatchingPeriod={1000}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
     
    </SafeAreaView>
   
  </SafeAreaProvider>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListScreen;
