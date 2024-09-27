import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import styles from '../styles/Stylesheet';

const ProfileCard = ({profile, onPress}) => {
  return (
    <TouchableOpacity
      key={profile?.id}
      style={styles.outerContainer}
      onPress={onPress}>
      <Image
        source={{uri: `${profile?.profilePicture}`}}
        style={styles.Image}
      />
      <View style={styles.profileDetails}>
        <Text style={styles.name}>Name: {profile?.name}</Text>
        <Text style={styles.age}>Age: {profile?.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
