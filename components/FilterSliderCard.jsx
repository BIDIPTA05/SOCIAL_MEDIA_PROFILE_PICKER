import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from '../styles/Stylesheet';

const FilterSliderCard = ({
  minimumAge,
  maximumAge,
  setMaximumAge,
  setMinimumAge,
}) => {
  return (
    <View style={styles.filter}>
      <Text style={styles.filtertext}>Filter by age</Text>
      <Text style={styles.sliderLabel}>Minimum :{Math.floor(minimumAge)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={20}
        maximumValue={80}
        step={1}
        value={minimumAge}
        onValueChange={value => setMinimumAge(value)}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="gray"
        thumbTintColor="red"
      />
      <Text style={styles.sliderLabel}>Maximum : {Math.floor(maximumAge)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={20}
        maximumValue={100}
        step={1}
        value={maximumAge}
        onValueChange={value => setMaximumAge(value)}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="gray"
        thumbTintColor="red"
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
  );
};
export default FilterSliderCard;
