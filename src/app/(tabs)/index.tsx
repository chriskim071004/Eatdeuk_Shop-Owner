import type { Metadata } from 'expo-router/server';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CtaButton } from '@/components/cta-button';
import { OwnerHeader } from '@/components/owner-header';
import { PageScrollView } from '@/components/page-scroll-view';
import { BrandColors, Layout } from '@/constants/brand';

export function generateMetadata(): Metadata {
  return {
    title: '잇득 사장님 | 대학가 오프라인 타임세일',
    description: '손님이 적은 시간에도 새로운 고객을 만날 기회. 대학가 상권을 위한 오프라인 타임세일 잇득의 매장 입점 안내.',
  };
}

const reasons = [
  {
    number: '01',
    title: '필요한 시간대에만 타임세일',
    description: '손님이 뜸한 시간에만 포인트 혜택을 설정해 가게 운영에 맞춰 활용하는 방식입니다.',
  },
  {
    number: '02',
    title: '우리 가게 메뉴에 포인트 혜택',
    description: '원하는 메뉴에 포인트 적립 혜택을 더해 오프라인 방문을 유도하는 구조입니다.',
  },
  {
    number: '03',
    title: '대학가 상권 집중 홍보',
    description: '대학가 주변 상권에 매장과 타임세일 메뉴를 알릴 수 있는 홍보 방식을 지향합니다.',
  },
] as const;

const steps = [
  { number: '1', title: '타임세일 시간대 선택', body: '방문이 적은 시간 중 원하는 시간대를 정해요.' },
  { number: '2', title: '메뉴와 포인트 혜택 등록', body: '해당 시간에 제공할 메뉴와 적립 포인트를 정해요.' },
  { number: '3', title: '대학가 상권에 메뉴 홍보', body: '잇득에서 메뉴를 알리고 방문을 유도하는 방식이에요.' },
] as const;

export default function HomeScreen() {
  return (
    <PageScrollView>
      <OwnerHeader />

      <View style={styles.hero}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>대학가 음식점 사장님을 위한 오프라인 타임세일</Text>
        </View>
        <Text style={styles.heroEyebrow}>OFFLINE TIME SALE · CAMPUS AREA</Text>
        <Text style={styles.heroTitle}>비어있는 시간,{'\n'}매출의 기회로.</Text>
        <Text style={styles.heroDescription}>
          손님이 적은 시간대, 비어 있는 테이블이 아쉬우셨나요?{'\n'}잇득과 함께 새로운 고객을 만날 기회를 만들어보세요.
        </Text>
      </View>

      <View style={styles.mainCard}>
        <View style={styles.mainCardTop}>
          <View style={styles.cardPill}>
            <Text style={styles.cardPillText}>EATDEUK FOR BUSINESS</Text>
          </View>
          <Text style={styles.cardMark}>잇득</Text>
        </View>
        <Text style={styles.mainCardTitle}>놓치고 있던 시간,{'\n'}가게를 알릴 기회로.</Text>
        <Text style={styles.mainCardDescription}>
          우리 가게의 시간대와 메뉴에 맞는 포인트 혜택을 활용해 대학가 상권에 매장을 알리는 방법. 잇득 입점 신청으로 시작해 보세요.
        </Text>
        <CtaButton label="잇득 입점 신청하기" theme="white" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>WHY EATDEUK?</Text>
        <Text style={styles.sectionTitle}>원하는 시간에 혜택을,{'\n'}대학가에 홍보를.</Text>
        <Text style={styles.sectionDescription}>
          잇득은 방문이 적은 시간대의 메뉴 혜택과 대학가 상권 홍보를 연결하는 오프라인 타임세일 플랫폼입니다.
        </Text>
        <View style={styles.reasonList}>
          {reasons.map((reason) => (
            <View key={reason.number} style={styles.reasonCard}>
              <View style={styles.numberCircle}>
                <Text style={styles.numberText}>{reason.number}</Text>
              </View>
              <View style={styles.reasonContent}>
                <Text style={styles.reasonTitle}>{reason.title}</Text>
                <Text style={styles.reasonDescription}>{reason.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.howSection}>
        <View style={styles.sectionHeadingRow}>
          <View style={styles.sectionHeadingContent}>
            <Text style={styles.sectionEyebrow}>HOW IT WORKS</Text>
            <Text style={styles.sectionTitle}>잇득은 이렇게 활용해요</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="입점 안내 자세히 보기"
            onPress={() => router.push('/guide')}
            style={({ pressed }) => [styles.moreButton, pressed && styles.pressed]}>
            <Text style={styles.moreButtonText}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.sectionDescription}>아래는 잇득이 준비 중인 이용 방식입니다. 메뉴 등록과 포인트 기능은 아직 제공되지 않습니다.</Text>
        <View style={styles.steps}>
          {steps.map((step, index) => (
            <View key={step.number} style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{step.number}</Text>
              </View>
              <View style={styles.stepBody}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepText}>{step.body}</Text>
              </View>
              {index !== steps.length - 1 ? <Text style={styles.stepDivider}>↓</Text> : null}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.lastCard}>
        <Text style={styles.lastEyebrow}>대학가 상권 음식점 입점 안내</Text>
        <Text style={styles.lastTitle}>우리 가게의 새로운 기회,{'\n'}잇득에서 시작해요.</Text>
        <Text style={styles.lastDescription}>
          손님이 적을 때도 메뉴를 알릴 새로운 방법을 찾고 계신가요? 잇득 입점 신청으로 관심을 알려주세요. 세부 운영 조건은 아직 확정되지 않았습니다.
        </Text>
        <CtaButton label="우리 가게 입점 신청하기" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerBrand}>잇득</Text>
        <Text style={styles.footerText}>대학가 오프라인 타임세일</Text>
        <Text style={styles.footerDisclaimer}>
          현재는 입점 신청을 통해 참여 의향을 확인하는 단계입니다. 타임세일 메뉴 등록, 매장 홍보 및 포인트 적립 기능은 아직 운영되지 않으며, 방문·매출 성과를 보장하지 않습니다.
        </Text>
      </View>
    </PageScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { marginTop: 43 },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: BrandColors.primarySoft,
  },
  badgeText: { color: BrandColors.primary, fontSize: 12, fontWeight: '800' },
  heroEyebrow: {
    marginTop: 23,
    color: BrandColors.primary,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  heroTitle: {
    marginTop: 12,
    fontSize: 34,
    lineHeight: 45,
    fontWeight: '900',
    letterSpacing: -1.05,
    color: BrandColors.text,
  },
  heroDescription: {
    marginTop: 16,
    maxWidth: 560,
    fontSize: 15,
    lineHeight: 25,
    color: BrandColors.textSecondary,
  },
  mainCard: {
    marginTop: 29,
    padding: 24,
    borderRadius: Layout.cardRadius,
    backgroundColor: BrandColors.primary,
  },
  mainCardTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  cardPill: { paddingVertical: 7, paddingHorizontal: 10, backgroundColor: '#FFFFFF29', borderRadius: 100 },
  cardPillText: { color: '#FFFFFF', fontSize: 10, fontWeight: '900', letterSpacing: 0.9 },
  cardMark: { color: '#DDE9FF', fontSize: 15, fontWeight: '900' },
  mainCardTitle: { marginTop: 26, color: '#FFFFFF', fontSize: 30, lineHeight: 39, fontWeight: '900', letterSpacing: -0.6 },
  mainCardDescription: { marginTop: 13, marginBottom: 24, color: '#E3EDFF', fontSize: 14, lineHeight: 23 },
  section: { marginTop: 57 },
  sectionEyebrow: { color: BrandColors.primary, fontSize: 12, fontWeight: '900', letterSpacing: 1.0 },
  sectionTitle: { marginTop: 9, color: BrandColors.text, fontSize: 25, fontWeight: '900', lineHeight: 34, letterSpacing: -0.6 },
  sectionDescription: { marginTop: 10, color: BrandColors.textSecondary, fontSize: 14, lineHeight: 23 },
  reasonList: { marginTop: 20, gap: 11 },
  reasonCard: {
    padding: 18,
    borderWidth: 1,
    borderColor: BrandColors.border,
    backgroundColor: '#FFFFFF',
    borderRadius: Layout.cardRadius,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  numberCircle: { width: 40, height: 40, borderRadius: 13, backgroundColor: BrandColors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  numberText: { color: BrandColors.primary, fontSize: 13, fontWeight: '900' },
  reasonContent: { flex: 1 },
  reasonTitle: { color: BrandColors.text, fontSize: 16, fontWeight: '800', lineHeight: 24 },
  reasonDescription: { color: BrandColors.textSecondary, fontSize: 13, lineHeight: 22, marginTop: 5 },
  howSection: { marginTop: 57 },
  sectionHeadingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16 },
  sectionHeadingContent: { flex: 1 },
  moreButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: BrandColors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonText: { color: BrandColors.primary, fontSize: 26, fontWeight: '700', lineHeight: 29 },
  steps: { marginTop: 20, borderRadius: Layout.cardRadius, backgroundColor: BrandColors.surface, padding: 19, gap: 15 },
  step: { flexDirection: 'row', alignItems: 'center', gap: 13 },
  stepNumber: { width: 32, height: 32, borderRadius: 11, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  stepNumberText: { color: BrandColors.primary, fontWeight: '900', fontSize: 14 },
  stepBody: { flex: 1 },
  stepTitle: { color: BrandColors.text, fontWeight: '800', fontSize: 15 },
  stepText: { marginTop: 4, color: BrandColors.textSecondary, fontSize: 12, lineHeight: 19 },
  stepDivider: { color: BrandColors.primary, fontSize: 17, fontWeight: '900' },
  lastCard: { marginTop: 55, padding: 24, borderRadius: Layout.cardRadius, backgroundColor: BrandColors.primarySoft },
  lastEyebrow: { color: BrandColors.primary, fontWeight: '900', fontSize: 12 },
  lastTitle: { color: BrandColors.text, fontWeight: '900', fontSize: 27, lineHeight: 37, letterSpacing: -0.5, marginTop: 12 },
  lastDescription: { color: BrandColors.textSecondary, fontSize: 13, lineHeight: 22, marginTop: 12, marginBottom: 22 },
  footer: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', columnGap: 9, rowGap: 8, borderTopWidth: 1, borderTopColor: BrandColors.border, marginTop: 48, paddingTop: 20 },
  footerBrand: { color: BrandColors.text, fontSize: 14, fontWeight: '900' },
  footerText: { color: BrandColors.textMuted, fontSize: 12 },
  footerDisclaimer: { color: BrandColors.textMuted, fontSize: 11, lineHeight: 18, width: '100%' },
  pressed: { opacity: 0.72 },
});
