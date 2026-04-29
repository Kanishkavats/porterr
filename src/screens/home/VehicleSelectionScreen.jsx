import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/colors';
import { 
  ChevronLeft, 
  ChevronRight,
  Truck
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const VEHICLES = [
  { id: '1', name: '3-wheeler', eta: '6 MIN', desc: 'Open body · up to 500 kg', price: '₹346', icon: Truck },
  { id: '2', name: 'Tata Ace', eta: '9 MIN', desc: '7 ft closed · up to 750 kg', price: '₹433', icon: Truck, recommended: true },
  { id: '3', name: 'Pickup 8ft', eta: '12 MIN', desc: '8 ft · up to 1,250 kg', price: '₹573', icon: Truck },
  { id: '4', name: 'Tata 407', eta: '18 MIN', desc: '10-14 ft · up to 2,500 kg', price: '₹922', icon: Truck },
];

export const VehicleSelectionScreen = ({ navigation }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[1]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeft size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.stepText}>STEP 3 OF 3</Text>
          <Text style={styles.headerTitle}>Choose your truck</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Route Summary */}
        <View style={styles.routeCard}>
          <View style={styles.routeRow}>
            <View style={[styles.dot, { backgroundColor: COLORS.success }]} />
            <Text style={styles.routeText} numberOfLines={1}>Koramangala, 5th Block</Text>
            <View style={styles.distanceBadge}>
              <Text style={styles.distanceLabel}>DISTANCE</Text>
              <Text style={styles.distanceValue}>12.4 km</Text>
            </View>
          </View>
          <View style={styles.routeRow}>
            <View style={[styles.dot, { backgroundColor: COLORS.secondary }]} />
            <Text style={styles.routeText} numberOfLines={1}>HSR Layout Sector 2</Text>
          </View>
        </View>

        {/* Vehicle List */}
        <View style={styles.vehicleList}>
          {VEHICLES.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[
                styles.vehicleItem, 
                selectedVehicle.id === item.id && styles.selectedVehicleItem
              ]}
              onPress={() => setSelectedVehicle(item)}
            >
              <View style={styles.vehicleInfo}>
                <View style={styles.vehicleIconContainer}>
                  <item.icon size={32} color={selectedVehicle.id === item.id ? COLORS.surface : COLORS.primary} />
                </View>
                <View style={styles.vehicleDetails}>
                  <Text style={[styles.vehicleName, selectedVehicle.id === item.id && styles.selectedText]}>{item.name}</Text>
                  <Text style={[styles.vehicleDesc, selectedVehicle.id === item.id && styles.selectedDesc]}>{item.desc}</Text>
                  <View style={[styles.etaBadge, selectedVehicle.id === item.id && styles.selectedEtaBadge]}>
                    <Text style={[styles.etaText, selectedVehicle.id === item.id && styles.selectedEtaText]}>ETA {item.eta} · ₹210+₹18/km</Text>
                  </View>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <Text style={[styles.price, selectedVehicle.id === item.id && styles.selectedText]}>{item.price}</Text>
                {selectedVehicle.id === item.id && (
                  <Text style={styles.tapBreakdownText}>Tap for breakdown</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Fare Breakdown */}
        <View style={styles.fareBreakdown}>
          <Text style={styles.fareBreakdownTitle}>FARE BREAKDOWN</Text>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Base fare ({selectedVehicle.name})</Text>
            <Text style={styles.fareValue}>₹210</Text>
          </View>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Distance - 12.4 km x ₹18</Text>
            <Text style={styles.fareValue}>₹223</Text>
          </View>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Waiting charges</Text>
            <Text style={styles.fareValue}>Free first 15 min</Text>
          </View>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Loading / unloading</Text>
            <Text style={styles.fareValue}>Included</Text>
          </View>
          
          <View style={styles.totalRow}>
            <View>
              <Text style={styles.totalLabel}>Estimated total</Text>
              <Text style={styles.totalSubtext}>Final fare depends on actual route. Min 2 km chargeable</Text>
            </View>
            <Text style={styles.totalValue}>{selectedVehicle.price}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('LoadDetails')}
        >
          <Text style={styles.continueButtonText}>Continue with {selectedVehicle.name}</Text>
          <ChevronRight size={20} color={COLORS.surface} />
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
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.md,
  },
  backButton: {
    marginRight: SPACING.md,
  },
  headerTitleContainer: {
    flex: 1,
  },
  stepText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 100,
  },
  routeCard: {
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: SPACING.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: SPACING.sm,
  },
  routeText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    flex: 1,
  },
  distanceBadge: {
    alignItems: 'flex-end',
  },
  distanceLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  distanceValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  vehicleList: {
    marginBottom: SPACING.xl,
  },
  vehicleItem: {
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
  selectedVehicleItem: {
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
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  selectedText: {
    color: COLORS.surface,
  },
  vehicleDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  selectedDesc: {
    color: 'rgba(255,255,255,0.7)',
  },
  etaBadge: {
    marginTop: 4,
  },
  etaText: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  selectedEtaText: {
    color: 'rgba(255,255,255,0.8)',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.primary,
  },
  tapBreakdownText: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 2,
  },
  fareBreakdown: {
    backgroundColor: COLORS.surface,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  fareBreakdownTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    letterSpacing: 1,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  fareLabel: {
    fontSize: 13,
    color: COLORS.primary,
  },
  fareValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.lg,
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  totalSubtext: {
    fontSize: 9,
    color: COLORS.textSecondary,
    maxWidth: width * 0.5,
    marginTop: 2,
  },
  totalValue: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.primary,
  },
  footer: {
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xl,
  },
  continueButtonText: {
    color: COLORS.surface,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: SPACING.sm,
  },
});
