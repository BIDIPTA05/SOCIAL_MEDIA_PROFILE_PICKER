import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/Stylesheet';

const Profilescreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const {userId} = route.params;
  //console.log(userId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://social-media-server-vert-ten.vercel.app/users/${userId}`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.profilemaincontainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('home')}>
        <AntDesign name="leftcircleo" size={30} color="blue" />
      </TouchableOpacity>

      <View style={styles.profileouterContainer}>
        <Text style={styles.profileheader}>Profile View</Text>
        {data?.profilePicture ? (
          <Image
            source={{uri: `${data.profilePicture}`}}
            style={styles.profileImage}
          />
        ) : (
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-red-error-icon-png-image_5418881.jpg',
            }}
            style={styles.profileImage}
          />
        )}
        <View style={styles.innerContainer}>
          <Text style={styles.Profiletext}>Name: {data?.name}</Text>
          <Text style={styles.Profiletext}>Age: {data?.age}</Text>
          <Text style={styles.Profiletext}>Email: {data?.email}</Text>
          <Text style={styles.Profiletext}>Bio: {data?.bio}</Text>
        </View>
      </View>
      <Text style={styles.footertext}>Made by Bidipta Saikia</Text>
    </View>
  );
};

export default Profilescreen;
