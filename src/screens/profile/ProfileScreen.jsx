import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/colors';
import { User, MapPin, CreditCard, Settings, ChevronRight, LogOut } from 'lucide-react-native';

export const ProfileScreen = () => {
  const menuItems = [
    { icon: User, label: 'Edit Profile', sublabel: 'Pankaj, +91 9876543210' },
    { icon: MapPin, label: 'Saved Addresses', sublabel: 'Home, Warehouse, Shop' },
    { icon: CreditCard, label: 'Payment Methods', sublabel: 'UPI, Cards, Wallet' },
    { icon: Settings, label: 'Preferences', sublabel: 'Language, Notifications' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>
          <Text style={styles.userName}>Pankaj</Text>
          <Text style={styles.userPhone}>+91 9876543210</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <item.icon size={20} color={COLORS.primary} />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Text style={styles.menuSublabel}>{item.sublabel}</Text>
              </View>
              <ChevronRight size={20} color={COLORS.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={COLORS.error} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { paddingTop: SPACING.xxl, paddingHorizontal: SPACING.lg, paddingBottom: SPACING.md },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.primary },
  scrollContent: { paddingHorizontal: SPACING.lg },
  profileCard: { backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.xl, padding: SPACING.xl, alignItems: 'center', marginBottom: SPACING.xl },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.secondary, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: COLORS.surface },
  userName: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary },
  userPhone: { fontSize: 14, color: COLORS.textSecondary, marginTop: 4 },
  menuContainer: { backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.xl, paddingVertical: SPACING.sm },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  menuIconContainer: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.gray[100], justifyContent: 'center', alignItems: 'center', marginRight: SPACING.md },
  menuTextContainer: { flex: 1 },
  menuLabel: { fontSize: 16, fontWeight: '600', color: COLORS.primary },
  menuSublabel: { fontSize: 12, color: COLORS.textSecondary, marginTop: 2 },
  logoutButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: SPACING.xxl, padding: SPACING.md },
  logoutText: { marginLeft: SPACING.sm, fontSize: 16, fontWeight: 'bold', color: COLORS.error },
});
