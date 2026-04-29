import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/colors';
import { 
  ChevronLeft, 
  ChevronRight,
  Plus, 
  Home, 
  Armchair, 
  Store, 
  Zap, 
  Factory, 
  MoreHorizontal,
  Info
} from 'lucide-react-native';

const CATEGORIES = [
  { id: '1', name: 'Household', icon: Home },
  { id: '2', name: 'Furniture', icon: Armchair },
  { id: '3', name: 'Shop stock', icon: Store },
  { id: '4', name: 'Appliance', icon: Zap },
  { id: '5', name: 'Industrial', icon: Factory },
  { id: '6', name: 'Other', icon: MoreHorizontal },
];

const WEIGHTS = [
  { id: 'w1', label: 'Light', desc: 'up to 200 kg - fits 3-wheeler', value: 'Light' },
  { id: 'w2', label: 'Medium', desc: '200-750 kg - fits Tata Ace', value: 'Medium' },
  { id: 'w3', label: 'Heavy', desc: '750 kg - 2.5 T - needs Tata 407', value: 'Heavy' },
];

export const LoadDetailsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [selectedWeight, setSelectedWeight] = useState('w2');
  const [description, setDescription] = useState('');
  const [helperNeeded, setHelperNeeded] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeft size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.stepText}>STEP 4 OF 5</Text>
          <Text style={styles.headerTitle}>What are you moving?</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Category Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>CATEGORY</Text>
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={[
                  styles.categoryItem, 
                  selectedCategory === item.id && styles.selectedCategoryItem
                ]}
                onPress={() => setSelectedCategory(item.id)}
              >
                <item.icon size={24} color={selectedCategory === item.id ? COLORS.surface : COLORS.primary} />
                <Text style={[
                  styles.categoryName, 
                  selectedCategory === item.id && styles.selectedCategoryName
                ]}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Weight Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>APPROX. WEIGHT</Text>
          {WEIGHTS.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.weightItem}
              onPress={() => setSelectedWeight(item.id)}
            >
              <View style={[
                styles.radioCircle, 
                selectedWeight === item.id && styles.radioCircleSelected
              ]}>
                {selectedWeight === item.id && <View style={styles.radioInner} />}
              </View>
              <View style={styles.weightInfo}>
                <Text style={styles.weightLabel}>{item.label}</Text>
                <Text style={styles.weightDesc}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Item Description */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ITEM DESCRIPTION (optional)</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="3-seater sofa, coffee table, 2 cartons"
            multiline
            numberOfLines={3}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.imageRow}>
            <View style={styles.imagePlaceholder}>
              <View style={styles.imageBox} />
            </View>
            <View style={styles.imagePlaceholder}>
              <View style={styles.imageBox} />
            </View>
            <TouchableOpacity style={styles.addImageButton}>
              <Plus size={24} color={COLORS.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Helpers & Add-ons */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>HELPERS & ADD-ONS</Text>
          <TouchableOpacity 
            style={styles.addonItem}
            onPress={() => setHelperNeeded(!helperNeeded)}
          >
            <View style={[
              styles.checkbox, 
              helperNeeded && styles.checkboxSelected
            ]}>
              {helperNeeded && <View style={styles.checkInner} />}
            </View>
            <Text style={styles.addonText}>Loading / unloading help</Text>
            <Info size={16} color={COLORS.textSecondary} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.reviewButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.reviewButtonText}>Review booking · ₹678</Text>
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
  section: {
    marginBottom: SPACING.xl,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    letterSpacing: 1,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '31%',
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  selectedCategoryItem: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryName: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: SPACING.sm,
  },
  selectedCategoryName: {
    color: COLORS.surface,
  },
  weightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  radioCircleSelected: {
    borderColor: COLORS.secondary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
  },
  weightInfo: {
    flex: 1,
  },
  weightLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  weightDesc: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  descriptionInput: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    fontSize: 14,
    color: COLORS.primary,
    borderWidth: 1,
    borderColor: COLORS.border,
    textAlignVertical: 'top',
  },
  imageRow: {
    flexDirection: 'row',
    marginTop: SPACING.md,
  },
  imagePlaceholder: {
    marginRight: SPACING.sm,
  },
  imageBox: {
    width: 70,
    height: 70,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: '#D1C4B5',
  },
  addImageButton: {
    width: 70,
    height: 70,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  checkboxSelected: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
  },
  checkInner: {
    width: 8,
    height: 8,
    borderRadius: 1,
    backgroundColor: COLORS.surface,
  },
  addonText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.surface,
  },
  footer: {
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  reviewButton: {
    backgroundColor: COLORS.primary,
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xl,
  },
  reviewButtonText: {
    color: COLORS.surface,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: SPACING.sm,
  },
});
