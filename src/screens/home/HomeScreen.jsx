import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/colors';
import { 
  Menu, 
  Bell, 
  MapPin, 
  Clock, 
  Plus,
  ChevronRight,
  Truck,
  Package,
  User
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const VEHICLE_TYPES = [
  { id: '1', name: '3-wheeler', eta: '6 MIN', desc: 'Open body · up to 500 kg', price: '₹240', icon: 'truck' },
  { id: '2', name: 'Tata Ace', eta: '9 MIN', desc: '7 ft closed · up to 750 kg', price: '₹280', icon: 'truck', promo: true },
  { id: '3', name: 'Pickup 8ft', eta: '12 MIN', desc: '8 ft · up to 1,250 kg', price: '₹400', icon: 'truck' },
  { id: '4', name: 'Tata 407', eta: '18 MIN', desc: '10-14 ft · up to 2,500 kg', price: '₹922', icon: 'truck' },
];

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Menu size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>DELIVERING FROM</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText} numberOfLines={1}>Koramangala, BLR</Text>
            <ChevronRight size={16} color={COLORS.primary} />
          </View>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.greeting}>Good morning,{"\n"}Pankaj</Text>
          <Text style={styles.welcomeSubtitle}>Book a truck below.</Text>
        </View>

        {/* Search/Address Bar */}
        <View style={styles.searchCard}>
          <View style={styles.searchRow}>
            <View style={[styles.dot, { backgroundColor: COLORS.success }]} />
            <View style={styles.searchInputContainer}>
              <Text style={styles.searchLabel}>PICKUP</Text>
              <Text style={styles.searchText}>87, 5th Block, Koramangala</Text>
            </View>
            <TouchableOpacity style={styles.nowButton}>
              <Clock size={14} color={COLORS.textSecondary} />
              <Text style={styles.nowText}>Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.searchRow}>
            <View style={[styles.dot, { backgroundColor: COLORS.secondary }]} />
            <View style={styles.searchInputContainer}>
              <Text style={styles.searchLabel}>DROP</Text>
              <Text style={[styles.searchText, { color: COLORS.textSecondary }]}>Where to?</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={16} color={COLORS.primary} />
              <Text style={styles.addText}>Stop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.quickAddresses}>
            {['Home', 'Warehouse', '+4 saved'].map((item, index) => (
              <TouchableOpacity key={index} style={styles.quickAddressTag}>
                <Text style={styles.quickAddressText}>{item}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.goButton}>
              <ChevronRight size={20} color={COLORS.surface} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Vehicle Selection */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pick a truck</Text>
          <TouchableOpacity>
            <Text style={styles.compareText}>Compare all →</Text>
          </TouchableOpacity>
        </View>

        {VEHICLE_TYPES.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={[styles.vehicleCard, item.promo && styles.promoCard]}
            onPress={() => navigation.navigate('LocationSearch')}
          >
            <View style={styles.vehicleInfo}>
              <View style={styles.vehicleIconContainer}>
                <Truck size={32} color={item.promo ? COLORS.surface : COLORS.primary} />
              </View>
              <View style={styles.vehicleDetails}>
                <View style={styles.vehicleNameRow}>
                  <Text style={[styles.vehicleName, item.promo && styles.promoText]}>{item.name}</Text>
                  <View style={[styles.etaBadge, item.promo && styles.promoEtaBadge]}>
                    <Text style={[styles.etaText, item.promo && styles.promoEtaText]}>{item.eta}</Text>
                  </View>
                </View>
                <Text style={[styles.vehicleDesc, item.promo && styles.promoDesc]}>{item.desc}</Text>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={[styles.priceFrom, item.promo && styles.promoDesc]}>FROM</Text>
              <Text style={[styles.price, item.promo && styles.promoText]}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Tabs Placeholder */}
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.activeTabIcon}>
            <MapPin size={24} color={COLORS.surface} />
          </View>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('BookingHistory')}>
          <Clock size={24} color={COLORS.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Package size={24} color={COLORS.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
          <User size={24} color={COLORS.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.md,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  locationContainer: {
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    letterSpacing: 1,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    maxWidth: width * 0.4,
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 100,
  },
  welcomeSection: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    lineHeight: 34,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  searchCard: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    marginBottom: SPACING.xl,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: SPACING.md,
  },
  searchInputContainer: {
    flex: 1,
  },
  searchLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    letterSpacing: 0.5,
  },
  searchText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 2,
  },
  nowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.md,
  },
  nowText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginLeft: 4,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.md,
  },
  addText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
    marginLeft: SPACING.xl,
  },
  quickAddresses: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.lg,
  },
  quickAddressTag: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.lg,
    marginRight: SPACING.sm,
  },
  quickAddressText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  goButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  compareText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  vehicleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  promoCard: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  vehicleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  vehicleIconContainer: {
    marginRight: SPACING.md,
  },
  vehicleDetails: {
    flex: 1,
  },
  vehicleNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  promoText: {
    color: COLORS.surface,
  },
  etaBadge: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: SPACING.sm,
  },
  promoEtaBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  etaText: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.textSecondary,
  },
  promoEtaText: {
    color: COLORS.surface,
  },
  vehicleDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  promoDesc: {
    color: 'rgba(255,255,255,0.7)',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceFrom: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  bottomTabs: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: COLORS.primary,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: SPACING.lg,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 10,
    color: COLORS.surface,
    fontWeight: 'bold',
    marginTop: 2,
  }
});
