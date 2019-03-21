import {
  Text,
  View,
  FlatList,
  Image,
  CameraRoll,
  StyleSheet,
} from 'react-native'

import React, { Component } from 'react';

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
  },
  cameraText: {
    textAlign:'center',
    color: 'white',
    backgroundColor: 'black',
    height:30,
    lineHeight: 30,
    fontSize:20,
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    CameraRoll.getPhotos({
      first: 17,
      assetType: 'Photos'
    })
    .then(r => {
      this.setState({images : r.edges});
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    return(
      <View style={styles.MainContainer}>
        <Text style={styles.cameraText}>Camere roll</Text>
        <View style={styles.ListContainer}>
          <FlatList
            data={this.state.images}
            keyExtractor={(item) => item.node.image.uri}
            numColumns={2}
            renderItem={({item,index}) => {
              //{console.log(item)}
              return (
                <View style={{ flex: 1, flexDirection: 'column', margin: 2 }} >
                  <Image 
                    key={index}
                    style={styles.imageThumbnail}
                    source= {{uri: item.node.image.uri}}

                  />
                </View>
              ) 
            }}
          />
        </View>
      </View>

    );
  }
}