import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logo from '../../asstes/logo.png'
import styles from './styles'
import api from '../../Services/api'

export default function Incidents() {

  const [incidents, setIncidents] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  function naviagateToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents() {

    if (loading) {
      return;
    }

    if(totalItems > 0 && incidents.length === totalItems) {
      return;
    }

    setLoading(true)
    
    const response = await api.get('/incidents', {
      params: { pages }
    })
    setIncidents([...incidents, ...response.data])
    setTotalItems(response.headers['x-total-count'])
    setPages(pages + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return(
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> {totalItems} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

    <FlatList
      style={styles.incidentsList}
      data={incidents}
      keyExtractor={incident => String(incident.id)}
      showsVerticalScrollIndicator={false}
      onEndReached={loadIncidents}
      onEndReachedThreshold={0.2}
      renderItem={({ item:incident }) => (

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>{incident.name}</Text>

          <Text style={styles.incidentProperty}>CASO: </Text>
          <Text style={styles.incidentValue}>{incident.title}</Text>

          <Text style={styles.incidentProperty}>VALOR: </Text>
          <Text style={styles.incidentValue}>
            {
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)
            }
          </Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => naviagateToDetail(incident)}
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