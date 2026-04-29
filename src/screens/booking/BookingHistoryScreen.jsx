import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/colors';
import { Truck, MapPin, Calendar } from 'lucide-react-native';

const BOOKINGS = [
  { id: '1', date: '24 Apr, 2026', time: '10:30 AM', vehicle: 'Tata Ace', status: 'Completed', pickup: 'Koramangala', drop: 'HSR Layout', price: '₹433' },
  { id: '2', date: '20 Apr, 2026', time: '02:15 PM', vehicle: '3-wheeler', status: 'Cancelled', pickup: 'Indiranagar', drop: 'Whitefield', price: '₹240' },
];

export const BookingHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {BOOKINGS.map((booking) => (
          <TouchableOpacity key={booking.id} style={styles.bookingCard}>
            <View style={styles.cardHeader}>
              <View style={styles.vehicleInfo}>
                <Truck size={20} color={COLORS.primary} />
                <Text style={styles.vehicleText}>{booking.vehicle}</Text>
              </View>
              <View style={[styles.statusBadge, booking.status === 'Cancelled' && styles.cancelledBadge]}>
                <Text style={[styles.statusText, booking.status === 'Cancelled' && styles.cancelledText]}>{booking.status}</Text>
              </View>
            </View>
            
            <View style={styles.routeContainer}>
              <View style={styles.routeRow}>
                <MapPin size={14} color={COLORS.success} />
                <Text style={styles.routeText} numberOfLines={1}>{booking.pickup}</Text>
              </View>
              <View style={styles.routeRow}>
                <MapPin size={14} color={COLORS.secondary} />
                <Text style={styles.routeText} numberOfLines={1}>{booking.drop}</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.dateTime}>
                <Calendar size={14} color={COLORS.textSecondary} />
                <Text style={styles.dateTimeText}>{booking.date} · {booking.time}</Text>
              </View>
              <Text style={styles.priceText}>{booking.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { paddingTop: SPACING.xxl, paddingHorizontal: SPACING.lg, paddingBottom: SPACING.md },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.primary },
  scrollContent: { paddingHorizontal: SPACING.lg },
  bookingCard: { backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.lg, padding: SPACING.md, marginBottom: SPACING.md, borderWidth: 1, borderColor: COLORS.border },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.md },
  vehicleInfo: { flexDirection: 'row', alignItems: 'center' },
  vehicleText: { marginLeft: SPACING.sm, fontWeight: 'bold', fontSize: 16, color: COLORS.primary },
  statusBadge: { backgroundColor: 'rgba(52, 199, 89, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  statusText: { fontSize: 10, fontWeight: 'bold', color: COLORS.success },
  cancelledBadge: { backgroundColor: 'rgba(255, 59, 48, 0.1)' },
  cancelledText: { color: COLORS.error },
  routeContainer: { marginBottom: SPACING.md },
  routeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  routeText: { marginLeft: SPACING.sm, fontSize: 13, color: COLORS.textSecondary },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: SPACING.sm },
  dateTime: { flexDirection: 'row', alignItems: 'center' },
  dateTimeText: { marginLeft: SPACING.sm, fontSize: 12, color: COLORS.textSecondary },
  priceText: { fontWeight: 'bold', fontSize: 16, color: COLORS.primary },
});
