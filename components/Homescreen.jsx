import {React, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ProfileCard from './ProfileCard';
import FilterSliderCard from './FilterSliderCard';
import styles from '../styles/Stylesheet';

const Homescreen = ({navigation}) => {
  const [profileList, setProfileList] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [search, setSearch] = useState('');
  const [minimumAge, setMinimumAge] = useState(0);
  const [maximumAge, setMaximumAge] = useState(100);
  const [loading, setLoading] = useState(true);
  //api fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://social-media-server-vert-ten.vercel.app/users',
        );
        const data = await response.json();
        setProfileList(data);
        setFilteredProfiles(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //console.log(profileList);
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
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Social Media Profile Picker</Text>
      <View style={styles.marginselector}>
        <TextInput
          placeholder="Search here..."
          style={styles.ipbox}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholderTextColor={'black'}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <FilterSliderCard
          minimumAge={minimumAge}
          maximumAge={maximumAge}
          setMinimumAge={setMinimumAge}
          setMaximumAge={setMaximumAge}
        />
        <View style={styles.marginselector}>
          <Text style={styles.text}> Available profiles </Text>
        </View>
        {filteredProfiles?.map(profile => (
          <ProfileCard
            key={profile._id}
            profile={profile}
            onPress={() => {
              setSearch('');
              navigation.navigate('profile', {userId: profile._id});
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Homescreen;
