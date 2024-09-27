import {StyleSheet} from 'react-native';
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
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  profileDetails: {
    marginLeft: 20,
    justifyContent: 'center',
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
    color: 'blue',
  },
  profilemaincontainer: {
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
  profileouterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
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
  Profiletext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  profileheader: {
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
