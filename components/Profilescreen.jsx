import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profilescreen = ({navigation, route}) => {
  const [data, setData] = useState();
  const {userId} = route.params;
  //console.log(userId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3000/users/${userId}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('home')}>
        <AntDesign name="leftcircleo" size={30} />
      </TouchableOpacity>

      <View style={styles.outerContainer}>
        <Text style={styles.profiletext}>Profile View</Text>
        {data?.profilePicture ? (
          <Image
            source={{uri: `${data.profilePicture}`}}
            style={styles.Image}
          />
        ) : (
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-red-error-icon-png-image_5418881.jpg',
            }}
            style={styles.Image}
          />
        )}
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Name: {data?.name}</Text>
          <Text style={styles.text}>Age: {data?.age}</Text>
          <Text style={styles.text}>Email: {data?.email}</Text>
          <Text style={styles.text}>Bio: {data?.bio}</Text>
        </View>
      </View>
      <Text style={styles.footertext}>Made by Bidipta Saikia</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 25,
  },
  innerContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  profiletext: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 50,
  },
  footertext: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Profilescreen;
