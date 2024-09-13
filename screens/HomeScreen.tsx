import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';

const HomeScreen: React.FC = () => {
  const data = [
    {
      id: '1',
      location: 'San Francisco, CA',
      description: 'Wonderful building near London Big Ben with amazing windows...',
      user: 'Olivia Redman',
      time: '2 minutes ago',
      likes: 325,
    },
    {
      id: '2',
      location: 'San Francisco, CA',
      description: 'Wonderful building near London Big Ben with amazing windows...',
      user: 'Olivia Redman',
      time: '2 minutes ago',
      likes: 325,
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.cardContent}>
        <Text style={styles.locationText}>{item.location}</Text>
        <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.connectText}>Connect</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.descriptionText}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <View style={styles.profilePlaceholder} />
        <Text style={styles.footerText}>{item.user}</Text>
        <Text style={styles.footerTime}>{item.time}</Text>
        <Text style={styles.footerLikes}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.activityText}>Activity</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('../assets/search.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/notifications.png')} style={styles.icon} />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>Popular</Text>
        <Text style={styles.inactiveTab}>Latest</Text>
        <Text style={styles.inactiveTab}>Following</Text>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Image source={require('../assets/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/network.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/search1.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/profile.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
  activityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001133',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    // backgroundColor: '#f5f5f5',
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001133',
  },
  inactiveTab: {
    fontSize: 16,
    color: '#ccc',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    width:Dimensions.get('screen').width-80,
    borderRadius: 10,
    backgroundColor: 'rgb(21 141 96)',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop:20
  },
  imagePlaceholder: {
    height: 300,
    margin:20,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  locationText: {
    fontSize: 12,
    color: '#666',
  },
  connectButton: {
    backgroundColor: '#001133',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  connectText: {
    color: '#fff',
    fontSize: 12,
  },
  descriptionText: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#001133',
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  profilePlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#001133',
  },
  footerTime: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  footerLikes: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#666',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00b386',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HomeScreen;