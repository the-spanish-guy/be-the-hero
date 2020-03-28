import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logo from '../../asstes/logo.png'
import styles from './styles'

export default function Incidents() {

  const navigation = useNavigation()

  function naviagateToDetail() {
    navigation.navigate('Detail')
  }

  return(
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> 0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAAAAAAAAAAAAA</Text>

    <FlatList
      style={styles.incidentsList}
      data={[1, 2, 3, 4, 5]}
      keyExtractor={incident => String(incident)}
      showsVerticalScrollIndicator={false}
      renderItem={() => (

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>

          <Text style={styles.incidentProperty}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>

          <Text style={styles.incidentProperty}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>

          <Text style={styles.incidentProperty}>ONG: </Text>
          <Text style={styles.incidentValue}>APAD: </Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={naviagateToDetail}
          >

            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#E02041"/>
          </TouchableOpacity>
        </View>
      )}
    />

    </View>
  )
}