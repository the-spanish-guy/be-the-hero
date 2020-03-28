import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logo from '../../asstes/logo.png'
import { useNavigation } from '@react-navigation/native'

export default function Details() {

  const navigation  = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={() => {}}>
          <Feather onPress={navigateBack} name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>

          <Text style={styles.incidentProperty}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>

          <Text style={styles.incidentProperty}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>

          <Text style={styles.incidentProperty}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>
      </View>

      <View style={styles.contactBox}>

        <Text style={styles.heroTitle} >Salve o dia</Text>
        <Text style={styles.heroTitle} >Seja o heroi desse caso.</Text>
        <Text style={styles.heroDescription} >Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}