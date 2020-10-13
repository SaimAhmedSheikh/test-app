import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';

const WIDTH = Dimensions.get('screen').width; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor='#0a1e33' />
      <Header
        containerStyle={styles.header}
        leftComponent={
          <Icon
            name={"ios-menu"}
            type="ionicon"
            color='#FFF'
            size={30}
            containerStyle={{ width: 35, height: 30}}
          />
        }
        centerComponent={
          <Text style={{ fontSize: 18, color: '#FFF'}}>Dashboard</Text>
        }
        rightComponent={
          <Icon
            name={"mail-outline"}
            type="material"
            color='#FFF'
            size={26}
            containerStyle={{ width: 35, height: 28}}
          />
        }
        leftContainerStyle={{ alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 5, paddingBottom: 10 }}
        centerContainerStyle={{alignItems: 'center', justifyContent: 'center', paddingBottom: 5}}
        barStyle='light-content'            
        />
        <View style={styles.header2}>
          <View style={{ width: WIDTH, height: 120, flexDirection: 'row', justifyContent: 'flex-start'} } >
            <View style={{ width: WIDTH-100, height: 120, backgroundColor: "#d8d8d8", borderRadius: 20, marginLeft: 20}} />
            <View style={{ width: WIDTH-100, height: 120, backgroundColor: "#d8d8d8", borderRadius: 20, marginLeft: 20}} />
          </View>
          <View style={{ width: WIDTH, marginLeft: 50 }}>
          <Text style={{ fontSize: 18, color: '#f7f7f7'}}>{`Welcome to TamkeenCare`}</Text>
          <Text style={{ fontSize: 13, color: '#f7f7f7'}}>{`No Warranty Activated!`}</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={{ fontSize: 20 , fontWeight: 'bold', color: '#0e243d', alignSelf: 'flex-start', marginLeft: 30, marginTop :20}}>
            {`Select Service`}
          </Text>
          <View style={{ width: WIDTH, height: 100, flexDirection: 'row', justifyContent: 'flex-start',marginLeft: 20, marginTop: 20} } >
            <Card style={{ width: 150, height: 150, borderRadius: 20, justifyContent: 'space-between'}}>
              <Image source={require('./assets/icon1.png')} style={{ width: 80, height: 80, resizeMode: 'contain', marginTop:12 }} />
              <Text style={{ fontSize: 15 , color: '#0e243d'}}>{`Maintenance`}</Text>
              <Icon
                name={"right"}
                type='antdesign'
                color='#0e243d'
                reverseColor='#FFF'
                size={24}
                containerStyle={{ marginBottom: -24 }}
                raised
                reverse
              />
            </Card>
            <Card style={{ width: 150, height: 150, borderRadius: 20, justifyContent: 'space-between', marginLeft: 20 }}>
              <Image source={require('./assets/icon2.png')} style={{ width: 80, height: 80, resizeMode: 'contain', marginTop:12 }} />
              <Text style={{ fontSize: 15 , color: '#0e243d'}}>{`Cleaning`}</Text>
              <Icon
                name={"right"}
                type='antdesign'
                color='#0e243d'
                reverseColor='#FFF'
                size={24}
                containerStyle={{ marginBottom: -24 }}
                raised
                reverse
              />
            </Card>
            <Card style={{ width: 150, height: 150, borderRadius: 20, justifyContent: 'space-between', marginLeft: 20 }}>
              <Image source={require('./assets/icon2.png')} style={{ width: 80, height: 80, resizeMode: 'contain', marginTop:12 }} />
              <Text style={{ fontSize: 15 , color: '#0e243d'}}>{`Cleaning`}</Text>
              <Icon
                name={"right"}
                type='antdesign'
                color='#0e243d'
                reverseColor='#FFF'
                size={24}
                containerStyle={{ marginBottom: -24 }}
                raised
                reverse
              />
            </Card>

          </View>
           <Button
              title='Activate Your Warrenty'
              type='solid'
              titleStyle={{fontSize: 15, color : '#fff'}}
              buttonStyle={{ backgroundColor: '#4997aa' , width: WIDTH-40, height: 50, borderRadius: 25 }}
              containerStyle={{ width: WIDTH-60, marginHorizontal: 16, marginVertical: 5, marginTop: 100  }}
              />
        </View>
    </SafeAreaView>
  );
}

const Card = ({ children, style }) => (
  <View style={[styles.cardView, style]}>
  {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    height: 60,
    backgroundColor: '#0e243d',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 8,
    paddingRight: 15
  },
  header2: {
    height: 250,
    backgroundColor: '#0e243d',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 0,
    padding: 8,
    paddingRight: 15
  },
  cardView: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 15,
  },


});
