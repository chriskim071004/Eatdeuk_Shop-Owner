import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { BrandColors } from '@/constants/brand';
import { OWNER_INTEREST_FORM_URL } from '@/constants/links';

type ButtonTheme = 'blue' | 'white' | 'outline';

interface CtaButtonProps {
  label: string;
  theme?: ButtonTheme;
  small?: boolean;
}

export function CtaButton({ label, theme = 'blue', small = false }: CtaButtonProps) {
  const openForm = () => {
    void Linking.openURL(OWNER_INTEREST_FORM_URL);
  };

  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={label}
      accessibilityHint="잇득 사장님 사전등록 Google 설문으로 이동합니다"
      onPress={openForm}
      style={({ pressed }) => [
        styles.button,
        theme === 'blue' && styles.blue,
        theme === 'white' && styles.white,
        theme === 'outline' && styles.outline,
        small && styles.small,
        pressed && styles.pressed,
      ]}>
      <Text style={[
        styles.text,
        theme === 'blue' && styles.blueText,
        theme === 'white' && styles.whiteText,
        theme === 'outline' && styles.outlineText,
        small && styles.smallText,
      ]}>{label}</Text>
      <View style={styles.arrowWrap}>
        <Text
          aria-hidden
          style={[
            styles.arrow,
            theme === 'blue' && styles.blueText,
            theme === 'white' && styles.whiteText,
            theme === 'outline' && styles.outlineText,
          ]}>↗</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 56,
    paddingHorizontal: 20,
    borderRadius: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  blue: {
    backgroundColor: BrandColors.primary,
  },
  white: {
    backgroundColor: BrandColors.background,
  },
  outline: {
    backgroundColor: BrandColors.background,
    borderWidth: 1,
    borderColor: BrandColors.border,
  },
  small: {
    minHeight: 44,
    paddingHorizontal: 16,
    borderRadius: 13,
  },
  text: { fontSize: 16, fontWeight: '800' },
  blueText: { color: '#FFFFFF' },
  whiteText: { color: BrandColors.primary },
  outlineText: { color: BrandColors.text },
  smallText: { fontSize: 14 },
  arrowWrap: { alignItems: 'center', justifyContent: 'center' },
  arrow: { fontWeight: '800', fontSize: 21, lineHeight: 24 },
  pressed: { opacity: 0.74 },
});
