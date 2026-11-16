import type { Metadata } from 'expo-router/server';
import { StyleSheet, Text, View } from 'react-native';

import { CtaButton } from '@/components/cta-button';
import { OwnerHeader } from '@/components/owner-header';
import { PageScrollView } from '@/components/page-scroll-view';
import { BrandColors, Layout } from '@/constants/brand';

export function generateMetadata(): Metadata {
  return {
    title: '사장님 입점 안내 | 잇득',
    description: '잇득 사장님 사전등록 방법과 자주 묻는 질문을 확인하세요.',
  };
}

const faqs = [
  {
    question: '지금 바로 잇득에 입점할 수 있나요?',
    answer: '아직 정식 운영 전입니다. 현재 사장님들의 참여 의향을 확인하는 프리토타입 단계이며, 설문 제출은 입점 확정이 아닙니다.',
  },
  {
    question: '사전등록에 비용이 드나요?',
    answer: '설문 참여 자체로 결제나 입점 계약이 진행되지는 않습니다. 실제 서비스 이용요금과 운영 조건은 아직 정해지지 않았습니다.',
  },
  {
    question: '초기 등록 혜택은 무엇인가요?',
    answer: '초기 참여 매장에 제공할 혜택은 현재 검토 중입니다. 확정되지 않은 무료 이용 기간이나 매출 효과를 보장하지 않습니다.',
  },
  {
    question: '로그인 버튼을 누르면 어떻게 되나요?',
    answer: '현재 로그인 기능은 구현되어 있지 않습니다. 로그인과 신청 버튼은 모두 사장님 참여 의향 설문으로 연결됩니다.',
  },
] as const;

export default function GuideScreen() {
  return (
    <PageScrollView>
      <OwnerHeader />

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>FOR RESTAURANT OWNERS</Text>
        <Text style={styles.title}>사장님을 위한{'\n'}잇득 입점 안내</Text>
        <Text style={styles.description}>
          잇득은 현재 음식점 사장님들의 관심을 확인하고 있어요. 정식 계약이 아닌, 간단한 사전등록 설문부터 시작합니다.
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryEyebrow}>지금 할 수 있는 일</Text>
        <Text style={styles.summaryTitle}>사전등록 설문 참여</Text>
        <Text style={styles.summaryDescription}>
          Google 설문을 통해 우리 가게의 참여 의향을 전달해 주세요. 추후 서비스 방향을 정하는 데 참고합니다.
        </Text>
        <CtaButton label="사전등록 설문 작성하기" theme="white" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>PROCESS</Text>
        <Text style={styles.sectionTitle}>참여는 이렇게 진행돼요</Text>
        <View style={styles.processCard}>
          <View style={styles.processRow}>
            <View style={styles.processNumber}><Text style={styles.processNumberText}>1</Text></View>
            <View style={styles.processBody}>
              <Text style={styles.processTitle}>설문 참여</Text>
              <Text style={styles.processText}>가게 정보와 잇득 참여 의향을 작성합니다.</Text>
            </View>
          </View>
          <View style={styles.processRow}>
            <View style={styles.processNumber}><Text style={styles.processNumberText}>2</Text></View>
            <View style={styles.processBody}>
              <Text style={styles.processTitle}>수요 및 의견 확인</Text>
              <Text style={styles.processText}>서비스 운영에 필요한 사장님들의 의견을 모읍니다.</Text>
            </View>
          </View>
          <View style={styles.processRow}>
            <View style={styles.processNumber}><Text style={styles.processNumberText}>3</Text></View>
            <View style={styles.processBody}>
              <Text style={styles.processTitle}>운영 방식 구체화</Text>
              <Text style={styles.processText}>조사 결과를 바탕으로 향후 참여 절차와 혜택을 검토합니다.</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>FAQ</Text>
        <Text style={styles.sectionTitle}>자주 묻는 질문</Text>
        <View style={styles.faqList}>
          {faqs.map((faq) => (
            <View key={faq.question} style={styles.faqCard}>
              <View style={styles.questionRow}>
                <Text style={styles.questionMark}>Q.</Text>
                <Text style={styles.question}>{faq.question}</Text>
              </View>
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.bottomCard}>
        <Text style={styles.bottomTitle}>우리 가게도 잇득과 함께할까요?</Text>
        <Text style={styles.bottomDescription}>사장님의 의견이 잇득의 다음 단계를 만드는 데 도움이 됩니다.</Text>
        <CtaButton label="사장님 혜택 신청하기" />
        <Text style={styles.disclaimer}>외부 Google 설문으로 이동합니다. 설문 제출은 입점 확정이 아닙니다.</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerBrand}>잇득</Text>
        <Text style={styles.footerText}>먹을수록 쌓인다.</Text>
        <Text style={styles.footerNote}>현재 서비스 준비 및 수요 검증 중입니다.</Text>
      </View>
    </PageScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { marginTop: 48 },
  eyebrow: { color: BrandColors.primary, fontSize: 12, letterSpacing: 1.1, fontWeight: '900' },
  title: { color: BrandColors.text, fontSize: 33, lineHeight: 44, fontWeight: '900', letterSpacing: -0.9, marginTop: 12 },
  description: { color: BrandColors.textSecondary, fontSize: 15, lineHeight: 25, marginTop: 15 },
  summaryCard: { backgroundColor: BrandColors.primary, padding: 24, marginTop: 30, borderRadius: Layout.cardRadius },
  summaryEyebrow: { fontSize: 12, color: '#DDE9FF', fontWeight: '800' },
  summaryTitle: { fontSize: 26, color: '#FFFFFF', fontWeight: '900', marginTop: 10, letterSpacing: -0.7 },
  summaryDescription: { color: '#E3EDFF', lineHeight: 23, fontSize: 14, marginTop: 11, marginBottom: 22 },
  section: { marginTop: 54 },
  sectionEyebrow: { color: BrandColors.primary, fontSize: 12, letterSpacing: 1.1, fontWeight: '900' },
  sectionTitle: { color: BrandColors.text, fontSize: 24, letterSpacing: -0.5, fontWeight: '900', marginTop: 10 },
  processCard: { padding: 20, backgroundColor: BrandColors.surface, borderRadius: Layout.cardRadius, marginTop: 20, gap: 22 },
  processRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 13 },
  processNumber: { width: 34, height: 34, borderRadius: 12, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  processNumberText: { color: BrandColors.primary, fontSize: 15, fontWeight: '900' },
  processBody: { flex: 1 },
  processTitle: { color: BrandColors.text, fontSize: 15, fontWeight: '800' },
  processText: { color: BrandColors.textSecondary, marginTop: 5, fontSize: 13, lineHeight: 21 },
  faqList: { gap: 12, marginTop: 20 },
  faqCard: { borderRadius: Layout.cardRadius, borderWidth: 1, borderColor: BrandColors.border, padding: 19 },
  questionRow: { flexDirection: 'row', gap: 7, alignItems: 'flex-start' },
  questionMark: { color: BrandColors.primary, fontSize: 16, fontWeight: '900' },
  question: { flex: 1, color: BrandColors.text, fontSize: 15, fontWeight: '800', lineHeight: 23 },
  answer: { color: BrandColors.textSecondary, fontSize: 13, lineHeight: 22, marginTop: 10 },
  bottomCard: { marginTop: 54, padding: 22, backgroundColor: BrandColors.primarySoft, borderRadius: Layout.cardRadius },
  bottomTitle: { color: BrandColors.text, fontSize: 23, fontWeight: '900', lineHeight: 32 },
  bottomDescription: { color: BrandColors.textSecondary, fontSize: 13, lineHeight: 21, marginTop: 10, marginBottom: 22 },
  disclaimer: { color: BrandColors.textSecondary, marginTop: 12, fontSize: 11, lineHeight: 18 },
  footer: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', columnGap: 9, rowGap: 8, marginTop: 49, borderTopColor: BrandColors.border, borderTopWidth: 1, paddingTop: 20 },
  footerBrand: { fontSize: 14, fontWeight: '900', color: BrandColors.text },
  footerText: { fontSize: 12, color: BrandColors.textMuted },
  footerNote: { fontSize: 11, color: BrandColors.textMuted, width: '100%' },
});
