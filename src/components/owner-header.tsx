import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { BrandHeader } from '@/components/brand-header';
import { BrandColors } from '@/constants/brand';
import { OWNER_INTEREST_FORM_URL } from '@/constants/links';

export function OwnerHeader() {
  return (
    <View style={styles.row}>
      <BrandHeader />
      <Pressable
        accessibilityRole="link"
        accessibilityHint="현재 로그인 대신 입점 신청 설문으로 이동합니다"
        onPress={() => { void Linking.openURL(OWNER_INTEREST_FORM_URL); }}
        style={({ pressed }) => [styles.login, pressed && styles.pressed]}>
        <Text style={styles.loginText}>로그인</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  login: {
    minHeight: 42,
    justifyContent: 'center',
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: BrandColors.border,
    borderRadius: 14,
    backgroundColor: BrandColors.background,
  },
  loginText: { color: BrandColors.text, fontSize: 14, fontWeight: '800' },
  pressed: { opacity: 0.72 },
});
