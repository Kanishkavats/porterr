import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/colors';
import { 
  ChevronLeft, 
  X, 
  Plus, 
  Map as MapIcon, 
  Users, 
  Clipboard, 
  Mic,
  Clock,
  Home,
  Warehouse,
  ShoppingBag,
  MapPin,
  ChevronRight
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const MATCHING_RESULTS = [
  { id: '1', name: 'HSR Layout Sector 2', address: '27th Main Rd, Bengaluru 560102', distance: '6.2 km' },
  { id: '2', name: 'HSR BDA Complex', address: '5th Sector, HSR Layout', distance: '7.1 km' },
  { id: '3', name: 'HSR Club', address: '27th Main Rd, Sector 1', distance: '6.8 km' },
  { id: '4', name: 'HSR Police Station', address: 'Agara, HSR Layout', distance: '7.5 km' },
];

const SAVED_LOCATIONS = [
  { id: 's1', name: 'Home', address: '87, 5th Block, Koramangala', icon: Home },
  { id: 's2', name: 'Warehouse', address: 'Plot 42, Bommanahalli', icon: Warehouse },
  { id: 's3', name: 'Shop', address: 'Brigade Rd, Shantala Nagar', icon: ShoppingBag },
];

export const LocationSearchScreen = ({ navigation }) => {
  const [dropLocation, setDropLocation] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeft size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.stepText}>STEP 2 OF 3</Text>
          <Text style={styles.headerTitle}>Where to?</Text>
        </View>
      </View>

      {/* Input Section */}
      <View style={styles.inputCard}>
        <View style={styles.inputRow}>
          <View style={styles.indicatorContainer}>
            <View style={[styles.dot, { backgroundColor: COLORS.success }]} />
            <View style={styles.dashLine} />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>PICKUP</Text>
            <View style={styles.pickupRow}>
              <Text style={styles.pickupText} numberOfLines={1}>87, 5th Block, Koramangala</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.indicatorContainer}>
            <View style={[styles.dot, { backgroundColor: COLORS.secondary }]} />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>DROP</Text>
            <View style={styles.dropInputRow}>
              <TextInput
                style={styles.input}
                placeholder="Where to?"
                value={dropLocation}
                onChangeText={setDropLocation}
                autoFocus
              />
              {dropLocation.length > 0 && (
                <TouchableOpacity onPress={() => setDropLocation('')}>
                  <X size={18} color={COLORS.textSecondary} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.addStopButton}>
          <Plus size={16} color={COLORS.primary} />
          <Text style={styles.addStopText}>Add another stop</Text>
          <Text style={styles.uptoText}>Upto 5</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Action Buttons */}
      <View style={styles.actionButtonsRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.actionButtonsScroll}>
          <TouchableOpacity style={styles.actionButton}>
            <MapIcon size={18} color={COLORS.secondary} />
            <Text style={styles.actionButtonText}>On map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Users size={18} color={COLORS.primary} />
            <Text style={styles.actionButtonText}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Clipboard size={18} color={COLORS.primary} />
            <Text style={styles.actionButtonText}>Paste</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Mic size={18} color={COLORS.primary} />
            <Text style={styles.actionButtonText}>Voice</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.resultsScroll}>
        {dropLocation.length > 0 ? (
          <View style={styles.resultsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>MATCHING "{dropLocation.toUpperCase()}"</Text>
              <Text style={styles.resultsCount}>{MATCHING_RESULTS.length} found</Text>
            </View>
            {MATCHING_RESULTS.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.resultItem}
                onPress={() => navigation.navigate('VehicleSelection')}
              >
                <View style={styles.resultIconContainer}>
                  <MapPin size={20} color={COLORS.textSecondary} />
                </View>
                <View style={styles.resultInfo}>
                  <Text style={styles.resultName}>{item.name}</Text>
                  <Text style={styles.resultAddress}>{item.address}</Text>
                </View>
                <Text style={styles.resultDistance}>{item.distance}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <>
            <View style={styles.savedSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>SAVED</Text>
                <TouchableOpacity>
                  <Text style={styles.manageText}>Manage</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.savedGrid}>
                {SAVED_LOCATIONS.map((item) => (
                  <TouchableOpacity key={item.id} style={styles.savedItem}>
                    <View style={styles.savedIconContainer}>
                      <item.icon size={20} color={COLORS.primary} />
                    </View>
                    <Text style={styles.savedName}>{item.name}</Text>
                    <Text style={styles.savedAddress} numberOfLines={1}>{item.address}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.recentSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>RECENT</Text>
              </View>
              {MATCHING_RESULTS.slice(0, 2).map((item) => (
                <TouchableOpacity key={'recent-' + item.id} style={styles.resultItem}>
                  <View style={styles.resultIconContainer}>
                    <Clock size={20} color={COLORS.textSecondary} />
                  </View>
                  <View style={styles.resultInfo}>
                    <Text style={styles.resultName}>{item.name}</Text>
                    <Text style={styles.resultAddress}>{item.address}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>

      {dropLocation.length > 0 && (
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate('VehicleSelection')}
          >
            <Text style={styles.continueButtonText}>Continue with {dropLocation}</Text>
            <ChevronRight size={20} color={COLORS.surface} />
          </TouchableOpacity>
        </View>
      )}
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
  inputCard: {
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.lg,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.xl,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  inputRow: {
    flexDirection: 'row',
  },
  indicatorContainer: {
    alignItems: 'center',
    width: 20,
    marginRight: SPACING.md,
    paddingTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dashLine: {
    width: 1,
    height: 40,
    backgroundColor: COLORS.border,
    borderStyle: 'dashed',
    marginVertical: 4,
  },
  inputWrapper: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  pickupRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SPACING.md,
  },
  pickupText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    flex: 1,
  },
  editButton: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.md,
  },
  editButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  dropInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: SPACING.sm,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
    paddingVertical: 8,
  },
  addStopButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.sm,
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  addStopText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    marginLeft: SPACING.sm,
    flex: 1,
  },
  uptoText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  actionButtonsRow: {
    marginTop: SPACING.md,
  },
  actionButtonsScroll: {
    paddingHorizontal: SPACING.lg,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    marginRight: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  actionButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primary,
    marginLeft: 6,
  },
  resultsScroll: {
    flex: 1,
    marginTop: SPACING.md,
  },
  resultsSection: {
    paddingHorizontal: SPACING.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    letterSpacing: 0.5,
  },
  resultsCount: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  resultIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  resultAddress: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  resultDistance: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  savedSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  manageText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  savedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savedItem: {
    width: (width - 60) / 3,
  },
  savedIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  savedName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  savedAddress: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },
  recentSection: {
    paddingHorizontal: SPACING.lg,
  },
  bottomButtonContainer: {
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
