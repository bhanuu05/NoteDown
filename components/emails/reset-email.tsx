import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface PasswordResetEmailProps {
    userName: string;
    userEmail: string;
    resetLink: string;
    
  }

const PasswordResetEmail = ({
     userName,
     resetLink,
     userEmail,
}: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Reset your password - Action required</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0">
                Reset Your Password
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hello {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                We received a request to reset the password for your account associated with <strong>{userEmail}</strong>.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Click the button below to create a new password. This link will expire in 24 hours for security reasons.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetLink}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px]">
                If the button doesn't work, copy and paste this link into your browser:
              </Text>
              <Link
                href={resetLink}
                className="text-blue-600 text-[14px] break-all underline"
              >
                {resetLink}
              </Link>
            </Section>

            {/* Security Notice */}
            <Section className="bg-amber-50 border border-amber-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[14px] text-amber-800 leading-[20px] m-0">
                <strong>Security Notice:</strong> If you didn't request this password reset, please ignore this email. Your password will remain unchanged. For additional security, consider enabling two-factor authentication on your account.
              </Text>
            </Section>

            
            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0 mb-[8px]">
                This email was sent to {userEmail}
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0 mb-[8px]">
                NoteDown Inc.
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0">
                © 2025 NoteDown. All rights reserved.{' '}
                <Link href="#" className="text-gray-500 underline">
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default PasswordResetEmail;