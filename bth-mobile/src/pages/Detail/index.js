import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'

import logo from '../../asstes/logo.png'

export default function Details() {

  const navigation  = useNavigation()
  const message= 'Mensagem que será enviada para email, e whatsapp'

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Teste de envio de email',
      recipients: ['bruna.ccamposs@gmail.com'],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`)
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
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}