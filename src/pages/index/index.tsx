
import {AtButton} from "taro-ui";
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.styles}>
      <Text>Hello world!</Text>
      <AtButton type='primary'>aaaa</AtButton>
    </View>
  )
}
