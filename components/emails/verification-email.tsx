import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
  userName: string;
  userEmail: string;
  companyName?: string;
  verificationUrl: string;
  }

const VerificationEmail = ({
  userName,
  userEmail,
  companyName = "NoteDown",
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Verify your email address to complete your account setup</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[16px]">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to {companyName}! Please verify your email to get started.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hi {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Thank you for signing up with <strong>{companyName}</strong>! To complete your account setup and ensure the security of your account, please verify your email address by clicking the button below.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Email to verify: <strong>{userEmail}</strong>
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px]">
                If the button above doesn't work, copy and paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all">
                {verificationUrl}
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-gray-50 p-[20px] rounded-[8px] mb-[32px]">
              <Text className="text-[14px] text-gray-700 leading-[20px] m-0 mb-[8px]">
                <strong>Security Notice:</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0">
                This verification link will expire in 24 hours. If you didn&apos;t create an account with {companyName}, please ignore this email or contact our support team.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                Best regards,<br />
                The {companyName} Team
              </Text>
              <Text className="text-[12px] text-gray-400 leading-[16px] m-0 mb-[8px]">
                {companyName} Inc.<br />                
              </Text>
              <Text className="text-[12px] text-gray-400 leading-[16px] m-0">
                © 2025 {companyName}. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;

