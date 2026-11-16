import type { Metadata } from 'expo-router/server';
import { StyleSheet, Text, View } from 'react-native';

import { CtaButton } from '@/components/cta-button';
import { OwnerHeader } from '@/components/owner-header';
import { PageScrollView } from '@/components/page-scroll-view';
import { BrandColors, Layout } from '@/constants/brand';

export function generateMetadata(): Metadata {
  return {
    title: '잇득 입점 안내 | 대학가 오프라인 타임세일',
    description: '대학가 상권을 위한 오프라인 타임세일, 잇득의 매장 입점 안내 및 이용 방법.',
  };
}

const faqs = [
  {
    question: '잇득은 어떤 서비스인가요?',
    answer: '음식점이 손님이 적은 시간대에 메뉴와 포인트 적립 혜택을 설정하고 대학가 상권에 매장을 알리는 오프라인 타임세일 서비스입니다. 실제 운영 기능은 준비 중입니다.',
  },
  {
    question: '어떤 시간대에 활용할 수 있나요?',
    answer: '사장님이 매장 방문이 적은 시간대를 직접 선택하는 방식을 준비하고 있습니다. 운영 가능한 시간과 조건은 아직 확정되지 않았습니다.',
  },
  {
    question: '메뉴와 포인트는 어떻게 등록하나요?',
    answer: '메뉴와 포인트 적립 조건을 설정하는 기능은 준비 중입니다. 현재는 입점 신청서를 통해 참여 의향을 알려주실 수 있습니다.',
  },
  {
    question: '대학가 홍보는 어떻게 진행되나요?',
    answer: '대학가 상권에 잇득의 타임세일 메뉴를 알리는 방향입니다. 구체적인 홍보 채널과 노출 방식은 아직 확정되지 않았습니다.',
  },
  {
    question: '입점 신청하면 바로 이용할 수 있나요?',
    answer: '현재는 실제 메뉴 등록과 포인트 운영 전 단계입니다. 신청서 제출만으로 입점이나 계약이 확정되지 않으며, 다음 절차는 추후 안내됩니다.',
  },
  {
    question: '입점 신청에 비용이 있나요?',
    answer: '입점 신청서 제출만으로 결제나 계약은 진행되지 않습니다. 실제 서비스 이용요금과 수수료는 아직 확정되지 않았습니다.',
  },
] as const;

export default function GuideScreen() {
  return (
    <PageScrollView>
      <OwnerHeader />

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>OFFLINE TIME SALE FOR OWNERS</Text>
        <Text style={styles.title}>우리 가게의 타임세일,{'\n'}이렇게 시작해요.</Text>
        <Text style={styles.description}>
          원하는 시간대에 메뉴와 포인트 적립 혜택을 설정하고, 대학가 상권에 매장을 알리는 잇득의 이용 방식을 소개합니다.
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryEyebrow}>잇득 입점 안내</Text>
        <Text style={styles.summaryTitle}>우리 가게 입점 신청</Text>
        <Text style={styles.summaryDescription}>
          오프라인 타임세일에 관심이 있다면 입점 신청서를 작성해 주세요. 현재 신청서를 통해 참여 의향을 확인하고 있으며, 메뉴 등록 기능은 준비 중입니다.
        </Text>
        <CtaButton label="입점 신청서 작성하기" theme="white" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>PROCESS</Text>
        <Text style={styles.sectionTitle}>잇득 이용 방법</Text>
        <View style={styles.processCard}>
          <View style={styles.processRow}>
            <View style={styles.processNumber}><Text style={styles.processNumberText}>1</Text></View>
            <View style={styles.processBody}>
              <Text style={styles.processTitle}>타임세일 시간대 선택</Text>
              <Text style={styles.processText}>우리 가게에서 활용하고 싶은 시간대를 정합니다.</Text>
            </View>
          </View>
          <View style={styles.processRow}>
            <View style={styles.processNumber}><Text style={styles.processNumberText}>2</Text></View>
            <View style={styles.processBody}>
              <Text style={styles.processTitle}>메뉴·포인트 혜택 등록</Text>
              <Text style={styles.processText}>해당 시간에 제공할 메뉴와 적립 포인트를 설정합니다.</Text>
            </View>
          </View>
          <View style={styles.processRow}>
            <View style={styles.processNumber}><Text style={styles.processNumberText}>3</Text></View>
            <View style={styles.processBody}>
              <Text style={styles.processTitle}>대학가 상권에 메뉴 홍보</Text>
              <Text style={styles.processText}>매장과 등록된 메뉴를 알리고 오프라인 방문을 유도합니다.</Text>
            </View>
          </View>
        </View>
        <Text style={styles.processCaveat}>※ 위 단계는 준비 중인 이용 방식이며, 현재는 입점 신청 설문만 받고 있습니다.</Text>
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
        <Text style={styles.bottomTitle}>우리 가게에 맞춘 홍보, 잇득으로.</Text>
        <Text style={styles.bottomDescription}>손님이 적은 시간에도 메뉴를 알리고 싶다면 잇득 입점 신청으로 시작해 보세요.</Text>
        <CtaButton label="잇득 입점 신청하기" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerBrand}>잇득</Text>
        <Text style={styles.footerText}>대학가 오프라인 타임세일</Text>
        <Text style={styles.footerNote}>실제 메뉴 등록·포인트 적립 기능은 준비 중입니다.</Text>
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
  processCaveat: { color: BrandColors.textMuted, fontSize: 11, lineHeight: 18, marginTop: 12 },
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
  footer: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', columnGap: 9, rowGap: 8, marginTop: 49, borderTopColor: BrandColors.border, borderTopWidth: 1, paddingTop: 20 },
  footerBrand: { fontSize: 14, fontWeight: '900', color: BrandColors.text },
  footerText: { fontSize: 12, color: BrandColors.textMuted },
  footerNote: { fontSize: 11, color: BrandColors.textMuted, width: '100%' },
});
