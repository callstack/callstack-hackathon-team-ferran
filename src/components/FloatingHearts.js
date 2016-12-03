import React, { Component } from 'react'
import { Dimensions, Animated, TouchableWithoutFeedback, StyleSheet, View } from 'react-native'

let {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

const ANIMATION_END_Y = Math.ceil(deviceHeight * 0.5)
const NEGATIVE_END_Y = ANIMATION_END_Y * (-1)
let startCount = 100;

const periscopeHeartStyles = StyleSheet.create({
  container: {
    flex: 1
  },

  heartWrap: {
    position: 'absolute',
    bottom:30,
    backgroundColor: 'transparent'
  },

  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },

  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#ed0712'
  },

  leftHeart: {
    transform: [
      {rotate: '-45deg'}
    ],
    left: 5
  },

  rightHeart: {
    transform: [
      {rotate: '45deg'}
    ],
    right: 5
  }
});



const Heart = (props) => (
  <View {...props} style={[periscopeHeartStyles.heart, props.style]}>
    <View style={[periscopeHeartStyles.heartShape, periscopeHeartStyles.leftHeart]} />
    <View style={[periscopeHeartStyles.heartShape, periscopeHeartStyles.rightHeart]} />
  </View>
)

const getRandomNumber = (min, max) => ( Math.random() * (max - min) + min )

class AnimatedHeart extends Component {

  static defaultProps = {
    onComplete: () => {}
  }


  constructor (props) {
    super(props)

    this.state = {
      position: new Animated.Value(0)
    }
  }

  componentWillMount() {
    this._yAnimation = this.state.position.interpolate({
      inputRange: [NEGATIVE_END_Y, 0],
      outputRange: [ANIMATION_END_Y, 0]
    })

    this._opacityAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y],
      outputRange: [1, 0]
    })

    this._scaleAnimation = this._yAnimation.interpolate({
      inputRange: [0, 15, 30, ANIMATION_END_Y],
      outputRange: [0, 1.2, 1, 1]
    })

    this._xAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/2, ANIMATION_END_Y],
      outputRange: [0, 15, 0]
    })

    this._rotateAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/4, ANIMATION_END_Y/3, ANIMATION_END_Y/2, ANIMATION_END_Y],
      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg']
    })
  }

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: NEGATIVE_END_Y,
      useNativeDriver: true
    }).start(this.props.onComplete)
  }

  getHeartAnimationStyle() {
    return {
      transform: [
        {translateY: this.state.position},
        {translateX: this._xAnimation},
        {scale: this._scaleAnimation},
        {rotate: this._rotateAnimation}
      ],
      opacity: this._opacityAnimation
    }
  }

  render() {
    return (
      <Animated.View style={[periscopeHeartStyles.heartWrap, this.getHeartAnimationStyle(), this.props.style]}>
        <Heart/>
      </Animated.View>
    )
  }
}

class HeartFloater extends Component {

  constructor(props) {

    super(props)

    this.state = {
      hearts: [], 
      howMany: 0,
    }
  }

  startAddingHearts = (howMany) => {
    setTimeout(() => {
      this.addHeart();
      if(howMany < 20) {
        this.startAddingHearts(howMany + 1);
      }
    }, 200);
  }

  componentDidMount() {
    this.startAddingHearts(0);
  }

  addHeart = () => {
    startCount += 1
    this.state.hearts.push({
      id: startCount,
      right: getRandomNumber(50, 150)
    })
    this.setState(this.state)
  }

  removeHeart(id) {
    let index = this.state.hearts.findIndex((heart) => heart.id === id)
    this.state.hearts.splice(index, 1)
    this.setState(this.state)
  }

  render() {
    return (
      <View style={periscopeHeartStyles.container}>
        <TouchableWithoutFeedback style={periscopeHeartStyles.container} onPress={this.addHeart.bind(this)}>
          <View  style={periscopeHeartStyles.container}>
            {
              this.state.hearts.map((item, index) => (
                <AnimatedHeart key={item.id} onComplete={this.removeHeart.bind(this, item.id)} style={{right: item.right}}/>
              ))
            }
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default HeartFloater
