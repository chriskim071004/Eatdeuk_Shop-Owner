import { Image, StyleSheet, Text, View } from 'react-native';

import { BrandColors } from '@/constants/brand';

export function BrandHeader() {
  return (
    <View style={styles.brandRow}>
      <Image
        accessibilityLabel="잇득 공식 로고"
        source={require('../../assets/eatdeuk-logo.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.logoText}>잇득</Text>
        <Text style={styles.slogan}>대학가 오프라인 타임세일</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  logoImage: {
    width: 48,
    height: 48,
    borderRadius: 13,
  },
  logoText: {
    color: BrandColors.text,
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: -0.6,
  },
  slogan: {
    marginTop: 1,
    color: BrandColors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
});
