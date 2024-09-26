import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';

const Homescreen = ({navigation}) => {
  const [profileList, setProfileList] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [search, setSearch] = useState('');
  const [minimumAge, setMinimumAge] = useState(0);
  const [maximumAge, setMaximumAge] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.0.2.2:3000/users');
        const data = await response.json();
        setProfileList(data);
        setFilteredProfiles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const searching = () => {
    if (profileList.length === 0) return;
    const filteredData = profileList.filter(profile => {
      const searchmatch = profile.name
        .toLowerCase()
        .includes(search?.toLowerCase());
      const agematch = profile.age >= minimumAge && profile.age <= maximumAge;
      return searchmatch && agematch;
    });
    setFilteredProfiles(filteredData);
  };

  useEffect(() => {
    searching();
  }, [search, minimumAge, maximumAge, profileList]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Social Media Profile Picker</Text>
      <View style={styles.marginselector}>
        <TextInput
          placeholder="Search here..."
          style={styles.ipbox}
          onChangeText={text => setSearch(text)}
          value={search}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.filter}>
          <Text style={styles.filtertext}>Filter by age</Text>
          <Text style={styles.sliderLabel}>
            Minimum :{Math.floor(minimumAge)}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={20}
            maximumValue={80}
            step={1}
            value={minimumAge}
            onValueChange={value => setMinimumAge(value)}
          />
          <Text style={styles.sliderLabel}>
            Maximum : {Math.floor(maximumAge)}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={20}
            maximumValue={100}
            step={1}
            value={maximumAge}
            onValueChange={value => setMaximumAge(value)}
          />
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => {
              setMinimumAge(0);
              setMaximumAge(100);
            }}>
            <Text style={styles.resetButtonText}>RESET</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.marginselector}>
          <Text style={styles.text}>---:Available profiles:---</Text>
        </View>

        {filteredProfiles?.map(profile => (
          <TouchableOpacity
            key={profile?.id}
            style={styles.outerContainer}
            onPress={() => {
              setSearch('');
              navigation.navigate('profile', {userId: profile._id});
            }}>
            <Image
              source={{uri: `${profile?.profilePicture}`}}
              style={styles.Image}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.name}>Name: {profile?.name}</Text>
              <Text style={styles.age}>Age: {profile?.age}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: 'lightblue',
    width: 380,
    height: 110,
    elevation: 5,
  },
  profileDetails: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    fontStyle: 'italic',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  age: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 10,
  },
  bio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  marginselector: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ipbox: {
    borderWidth: 3,
    width: 380,
    height: 60,
    borderRadius: 30,
    paddingLeft: 10,
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  slider: {
    width: 360,
    height: 40,
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  filter: {
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
  },
  filtertext: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  resetButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Homescreen;
