import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Pressable,
  FlatList,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {width} from './src/components/utils/DeviceDimensions';
import {BackgroundImage} from './src/components/utils/images';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
const DATA = [
  {
    id: '1',
    title: '15k',
  },
  {
    id: '2',
    title: '20k',
  },
  {
    id: '3',
    title: '20k',
  },
];

const iconsData = [
  {
    id: 1,
    iconName: 'share',
  },
  {
    id: 2,
    iconName: 'bar-chart',
  },
  {
    id: 3,
    iconName: 'envelope-o',
  },
];

const App = () => {
  const [showItems, setShowItems] = useState(false);
  const [text, setText] = useState('');
  const [commentData, setCommentData] = useState([
    {
      id: '1',
      text: 'Augustina Midgett',
      desc: "The info here is really solid. Let's explore",
    },
    {id: '2', text: 'Comment 2', desc: 'Wow this is really epic'},
    {
      id: '3',
      text: 'Comment 3',
      desc: "The info here is really solid. Let's explore",
    },
    {
      id: '4',
      text: 'Augustina Midgett HH',
      desc: "The info here is really solid. Let's explore",
    },
    {
      id: '5',
      text: 'Augustina Midgett',
      desc: "The info here is really solid. Let's explore",
    },
  ]);

  const postComment = () => {
    const lastItem = commentData[commentData.length - 1];
    const newComment = {
      id: String(commentData.length + 1),
      text: lastItem.text,
      desc: text,
    };
    setCommentData([...commentData, newComment]);
    setText('');
  };

  const TextComponent = ({title, style}) => {
    return <Text style={[styles.textColor, style]}>{title}</Text>;
  };
  const UserAccount = () => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.profileInfo}>
            <Image source={BackgroundImage} style={styles.profileImage} />
            <View>
              <TextComponent title={'Iman Esmail'} style={styles.nameText} />
              <TextComponent
                title={'Iman Esmail'}
                style={styles.descriptionText}
              />
            </View>
            <Pressable style={styles.followButton}>
              <TextComponent title={'Follow'} style={styles.followButtonText} />
            </Pressable>
          </View>
          <Pressable style={styles.liveButton}>
            <TextComponent title={'Live 10k'} style={styles.liveButtonText} />
          </Pressable>
        </View>
      </View>
    );
  };

  const NumberOfLikes = ({numberOfLikes}) => {
    return (
      <Pressable style={[styles.followButton, styles.followBtnSTyle]}>
        <Icon name="heart" size={20} color="yellow" />
        <TextComponent
          title={numberOfLikes}
          style={[styles.followButtonText, styles.followBtnTextStyle]}
        />
      </Pressable>
    );
  };
  const Icons = () => {
    return (
      <FlatList
        data={iconsData}
        renderItem={({item}) => (
          <Pressable style={[styles.icons, styles.IconsStyle]}>
            <FontAwesomeIcon name={item.iconName} size={20} color="white" />
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  const renderItem = ({item, index}) => {
    let textStyle = styles.smallText;
    let opacityStyle = {};
    let descText = styles.descText;

    if (index === commentData.length - 1) {
      textStyle = {...styles.bigText, color: 'yellow'};
      opacityStyle = {opacity: 1};
      descText = {...styles.descText, color: 'yellow'};
    } else if (index === commentData.length - 2) {
      textStyle = styles.smallText;
      // imgStyle = {
      //   width: 32,
      //   height: 32,
      //   borderRadius: 32,
      //   borderWidth: 1,
      //   borderColor: 'yellow',
      // };
      opacityStyle = {opacity: 0.9};
      descText = styles.descText;
    } else if (index === commentData.length - 3) {
      textStyle = styles.smallText;
      opacityStyle = {opacity: 0.7};
      descText = styles.descText;
    } else if (index === commentData.length - 4) {
      textStyle = styles.smallText;
      opacityStyle = {opacity: 0.5};
      descText = styles.descText;
    } else if (index === commentData.length - 5) {
      textStyle = styles.smallText;
      opacityStyle = {opacity: 0.2};
      descText = styles.descText;
    }
    if (
      index === commentData.length - 1 ||
      index === commentData.length - 2 ||
      index === commentData.length - 3 ||
      index === commentData.length - 4 ||
      index === commentData.length - 5
    ) {
      return (
        <View style={[styles.commentContainer, opacityStyle]}>
          <Image source={BackgroundImage} style={[styles.commentImageStyle]} />
          <View style={{paddingLeft: 6}}>
            <Text style={textStyle}>{item.text}</Text>
            <Text style={descText}>{item.desc}</Text>
          </View>
        </View>
      );
    }
  };

  const SurpriceBox = () => {
    const data = Array(10).fill({id: '1'});
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable style={[styles.surpriceBox, styles.surpriceBoxContainer]}>
            <Image
              source={{
                uri: 'https://w7.pngwing.com/pngs/380/715/png-transparent-vector-gift-box-surprise-icon-bow-color-packaging-isometry.png',
              }}
              style={styles.surpriceImage}
            />
            <TextComponent
              title={'Surprise Box'}
              style={[styles.followButtonText, styles.surpriceText]}
            />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      />
    );
  };
  console.log(text, 'ppp');
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? '100' : 100}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
          }}
          style={styles.image}
          resizeMode="cover">
          <View style={styles.header}>
            <TextComponent title={'Live'} style={styles.liveText} />
            <TextComponent title={'for you'} />
            <TextComponent title={'Following'} />
          </View>

          <View style={styles.contentContainer}>
            <UserAccount />
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <NumberOfLikes numberOfLikes={item.title} />
              )}
              keyExtractor={item => item.id}
              horizontal={true}
            />
            <Icons />
            <Image source={BackgroundImage} style={styles.viewerImgStyles} />
            <View style={styles.commentContainerStyle}>
              <FlatList
                data={commentData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
              <View
                style={{
                  top: width / 3.5,
                  marginRight: 8,
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://us.123rf.com/450wm/graphicmall/graphicmall2208/graphicmall220800305/190413142-video-film-3d-rendering-isometric-icon.jpg?ver=6',
                  }}
                  style={{width: 50, height: 50, borderRadius: 10}}
                />
                <Pressable
                  style={[styles.followButton, styles.book1to1Container]}
                  onPress={() => Alert.alert('1 to 1 booked')}>
                  <TextComponent
                    title={'Book 1 to 1'}
                    style={[styles.followButtonText, styles.book1to1Text]}
                  />
                </Pressable>
              </View>
            </View>
            <SurpriceBox />
            <View style={styles.saySomethingContainer}>
              <View
                style={[
                  styles.input,
                  {width: showItems === false ? '90%' : width / 1.89},
                ]}>
                <TextInput
                  placeholder="Say... Something"
                  placeholderTextColor="#FFFFFF"
                  value={text}
                  onChangeText={e => setText(e)}
                  style={styles.textInputContent}
                />
                <Pressable onPress={postComment}>
                  <Feather name={'send'} size={20} color="yellow" />
                </Pressable>
              </View>
              {showItems ? (
                <>
                  <Pressable style={[styles.icons, styles.yellowBorderIcon]}>
                    <Feather name={'video'} size={18} color="white" />
                  </Pressable>
                  <Pressable style={[styles.icons, styles.yellowBorderIcon]}>
                    <Feather name={'calendar'} size={18} color="white" />
                  </Pressable>
                  <Pressable style={[styles.icons, styles.yellowBorderIcon]}>
                    <Feather name={'briefcase'} size={18} color="white" />
                  </Pressable>
                </>
              ) : null}
              <Feather
                name={'more-vertical'}
                size={24}
                color="white"
                style={{marginBottom: 10, marginRight: 20}}
                onPress={() => setShowItems(!showItems)}
              />
            </View>
          </View>
          <View style={styles.tabContainer}>
            <Pressable onPress={postComment} style={{alignItems: 'center'}}>
              <Feather name={'home'} size={24} color="yellow" />
              <TextComponent title={'Home'} style={styles.tabTextStyle} />
            </Pressable>
            <Pressable
              onPress={postComment}
              style={{alignItems: 'center', marginRight: 40}}>
              <Feather name={'search'} size={24} color="yellow" />
              <TextComponent title={'Discover'} style={styles.tabTextStyle} />
            </Pressable>
            <Pressable
              onPress={postComment}
              style={{alignItems: 'center', marginLeft: 40}}>
              <Ionicons
                name={'notifications-circle-outline'}
                size={28}
                color="yellow"
              />
              <TextComponent title={'Live'} style={{fontSize: 11}} />
            </Pressable>
            <Pressable onPress={postComment} style={{alignItems: 'center'}}>
              <Feather name={'user'} size={24} color="yellow" />
              <TextComponent title={'Profile'} style={styles.tabTextStyle} />
            </Pressable>
            <Pressable onPress={postComment} style={styles.plusCircle}>
              <AntIcon name={'pluscircle'} size={24} color="yellow" />
            </Pressable>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: '100vh',
    width: '100vw',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: width / 20,
    justifyContent: 'space-around',
  },
  liveText: {
    borderBottomWidth: 2,
    borderColor: 'yellow',
    width: width / 6,
    textAlign: 'center',
  },
  contentContainer: {
    padding: 10,
  },
  textColor: {
    color: 'white',
    fontFamily: 'Roboto',
  },

  userContainer: {
    paddingTop: width / 200,
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  viewerImgStyles: {
    height: 100,
    width: 100,
    borderRadius: 8,
    // marginRight: 10,
    position: 'absolute',
    top: width / 1.5,
    borderWidth: 2,
    borderColor: 'yellow',
    display: 'flex',
    marginLeft: width / 1.4,
  },
  commentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: width / 8,
  },
  nameText: {
    fontSize: width / 26,
  },
  descriptionText: {
    fontSize: width / 30,
    color: 'darkgrey',
  },
  followButton: {
    backgroundColor: 'yellow',
    borderRadius: width / 20,
    paddingHorizontal: width / 30,
    paddingVertical: width / 120,
    height: 26,
    marginLeft: 10,
  },
  book1to1Container: {width: 86, marginTop: 10, marginLeft: 0},

  followBtnSTyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 5,
    marginBottom: width / 7,
    marginTop: width / 80,
  },
  followBtnTextStyle: {
    color: 'white',
    paddingLeft: 5,
  },
  surpriceBox: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingVertical: width / 120,
    cursor: 'pointer',
    height: 26,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  surpriceBoxContainer: {
    width: 110,
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
    marginRight: 10,
  },
  surpriceImage: {height: 16, width: 16, borderRadius: 8, marginRight: 6},
  surpriceText: {fontSize: 12, color: 'white'},
  textInputContainer: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    cursor: 'pointer',
    borderWidth: 1,
    borderColor: 'yellow',
    justifyContent: 'center', // Align TextInput vertically in the center
    paddingHorizontal: 10, // Add padding to TextInput container
  },
  saySomethingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContent: {color: 'white', paddingLeft: 10},
  icons: {
    backgroundColor: 'yellow',
    borderRadius: width / 20,
    paddingHorizontal: width / 120,
    height: 26,
  },
  IconsStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 40,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width / 40,
    position: 'relative',
  },
  followButtonText: {
    color: 'black',
    fontSize: width / 30,
  },
  book1to1Text: {fontSize: 12, width: width / 2},
  liveButton: {
    backgroundColor: 'red',
    borderRadius: width / 20,
    paddingHorizontal: width / 30,
    paddingVertical: width / 120,
    height: 26,
    marginLeft: 10,
    textAlign: 'center',
  },
  liveButtonText: {
    color: 'white',
    fontSize: width / 30,
  },
  commentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  commentImageStyle: {width: 32, height: 32, borderRadius: 32},
  bigText: {
    fontSize: 14,
    color: 'white',
    borderRadius: 5,
  },
  smallText: {
    fontSize: 14,
    color: 'white',
  },
  descText: {
    fontSize: 11,
    color: 'white',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    borderWidth: 1,
    borderColor: 'yellow', // Yellow color
    borderRadius: 6,
    color: '#FFFFFF', // White color for text
    // marginBottom: 10, // Adjust as needed
    height: 38,
    fontFamily: 'Roboto',
    padding: 0,
    paddingRight: 10,
    // minWidth:width/1.7,
    marginRight: 10,
    marginLeft: 12,
  },
  yellowBorderIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 32,
    height: 32,
    borderColor: 'yellow',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  plusCircle: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingTop: 10,
    paddingRight: width / 9,
    bottom: 14,
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'yellow',
    paddingTop: 5,
    position: 'relative',
    backgroundColor: 'black',
  },
  tabTextStyle: {fontSize: 11, color: 'grey'},
});

export default App;
