import type { Metadata } from 'expo-router/server';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CtaButton } from '@/components/cta-button';
import { OwnerHeader } from '@/components/owner-header';
import { PageScrollView } from '@/components/page-scroll-view';
import { BrandColors, Layout } from '@/constants/brand';

export function generateMetadata(): Metadata {
  return {
    title: '잇득 사장님 | 우리 가게에 새로운 기회를',
    description: '손님에게는 식사 혜택을, 사장님에게는 새로운 기회를. 잇득 사장님용 사전등록 페이지입니다.',
  };
}

const reasons = [
  {
    number: '01',
    title: '우리 가게를 알릴 새로운 접점',
    description: '식사 혜택을 찾는 손님에게 가게와 메뉴를 소개하는 새로운 방법을 준비하고 있어요.',
  },
  {
    number: '02',
    title: '메뉴의 매력을 혜택과 함께',
    description: '메뉴와 적립 혜택을 함께 보여주는 경험을 구상하고 있어요.',
  },
  {
    number: '03',
    title: '지금은 가볍게 참여 의향만',
    description: '바로 입점 계약을 하는 대신, 간단한 설문으로 관심을 알려주세요.',
  },
] as const;

const steps = [
  { number: '1', title: '사전등록 설문 작성', body: '가게와 참여 의향을 알려주세요.' },
  { number: '2', title: '참여 수요 확인', body: '사장님들의 의견으로 서비스를 다듬어요.' },
  { number: '3', title: '향후 진행 안내', body: '운영 방식이 정해지면 다음 단계를 안내할 예정이에요.' },
] as const;

export default function HomeScreen() {
  return (
    <PageScrollView>
      <OwnerHeader />

      <View style={styles.hero}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>사장님을 위한 잇득 · 사전등록 진행 중</Text>
        </View>
        <Text style={styles.heroEyebrow}>EAT &amp; EARN FOR BUSINESS</Text>
        <Text style={styles.heroTitle}>손님에게는 식사 혜택,{'
'}사장님에게는{'
'}새로운 기회를.</Text>
        <Text style={styles.heroDescription}>
          손님은 맛있게 먹고 혜택을 쌓고, 사장님은 우리 가게를 알릴 기회를 얻는 서비스. 잇득이 사장님들의 의견을 기다립니다.
        </Text>
      </View>

      <View style={styles.mainCard}>
        <View style={styles.mainCardTop}>
          <View style={styles.cardPill}>
            <Text style={styles.cardPillText}>EARLY ACCESS</Text>
          </View>
          <Text style={styles.cardMark}>잇득</Text>
        </View>
        <Text style={styles.mainCardTitle}>우리 가게도,{'
'}잇득과 함께.</Text>
        <Text style={styles.mainCardDescription}>
          정식 출시 전, 사장님들의 관심과 의견을 듣고 있어요. 간단한 설문으로 먼저 참여해보세요.
        </Text>
        <CtaButton label="사전등록 신청하기" theme="white" />
        <Text style={styles.cardNote}>Google 설문으로 이동 · 설문 참여는 입점 확정이 아닙니다.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>WHY EATDEUK?</Text>
        <Text style={styles.sectionTitle}>잇득이 준비하는{'
'}사장님을 위한 경험</Text>
        <Text style={styles.sectionDescription}>
          지금은 컨셉을 검증하는 단계예요. 아래 내용은 준비 중인 서비스 방향입니다.
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
            <Text style={styles.sectionEyebrow}>HOW TO START</Text>
            <Text style={styles.sectionTitle}>참여 방법은 간단해요</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="입점 안내 자세히 보기"
            onPress={() => router.push('/guide')}
            style={({ pressed }) => [styles.moreButton, pressed && styles.pressed]}>
            <Text style={styles.moreButtonText}>+</Text>
          </Pressable>
        </View>
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
        <Text style={styles.lastEyebrow}>함께 시작할 사장님을 찾고 있어요</Text>
        <Text style={styles.lastTitle}>잇득의 첫걸음에{'
'}함께해 주세요.</Text>
        <Text style={styles.lastDescription}>
          초기 참여 관련 혜택과 운영 조건은 아직 확정 전이며, 의견을 바탕으로 구체화할 예정입니다.
        </Text>
        <CtaButton label="사장님 사전등록하기" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerBrand}>잇득</Text>
        <Text style={styles.footerText}>먹을수록 쌓인다.</Text>
        <Text style={styles.footerDisclaimer}>
          이 페이지는 서비스 출시 전 수요 검증을 위한 프리토타입입니다. 실제 입점, 포인트 적립 및 운영은 현재 제공되지 않습니다.
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
  cardNote: { marginTop: 13, color: '#E3EDFF', fontSize: 11, lineHeight: 17 },
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
